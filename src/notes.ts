const noteDiv: HTMLDivElement = document.querySelector(".notes");
const noteArea: HTMLTextAreaElement = noteDiv.querySelector("#notes");
const noteLabel: HTMLLabelElement = noteDiv.querySelector("label");
let currentContent: { text: string };
function toggleNotes(name: string, content: { text: string }) {
  noteDiv.classList.remove("hidden");
  noteArea.focus();
  noteArea.value = content.text;
  currentContent = content;
  noteLabel.textContent = `Add notes for: ${name}`
}
noteArea.addEventListener("keypress", () => {
  currentContent.text = noteArea.value;
});
noteArea.addEventListener("focusout", () => { noteDiv.classList.add("hidden") });
export { toggleNotes };
