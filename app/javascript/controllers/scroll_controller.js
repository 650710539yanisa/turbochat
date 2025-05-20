import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  /** On start */
  connect() {
    console.log("Connected");
    const messages = document.getElementById("messages");
    
    this.observer = new MutationObserver(() => {
      this.resetScroll(messages);
    });

    this.observer.observe(messages, { childList: true });

    this.resetScroll(messages);
  }
  /** On stop */
  disconnect() {
    console.log("Disconnected");

    if (this.observer) {
      this.observer.disconnect();
    }
  }
  /** Custom function */
  resetScroll(messages) {
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }
}