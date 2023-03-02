this.document.getElementById("showAlert").addEventListener("click", () => {
  document.getElementById("alertDialog").showModal();
});

this.document.getElementById("showConfirm").addEventListener("click", () => {
  document.getElementById("confirmDialog").showModal();
});

this.document.getElementById("showName").addEventListener("click", () => {
  document.getElementById("nameDialog").showModal()
});

this.document.getElementById("okConfirm").addEventListener("click", () => {
  document.getElementById("outputPrompt").innerText = "Confirm result: true";
  document.getElementById("outputPrompt").hidden = false;
});

this.document.getElementById("cancelConfirm").addEventListener("click", () => {
    document.getElementById("outputPrompt").innerText = "Confirm result: false";
    document.getElementById("outputPrompt").hidden = false;
});

this.document.getElementById("okName").addEventListener("click", () => {
  document.getElementById("nameDialog").close();
  let text = document.getElementById("nameInput").value;
  let outputPrompt = document.getElementById("outputPrompt");
  outputPrompt.innerText = "Prompt result: " + text;
  outputPrompt.hidden = false;
});

this.document
  .getElementById("cancelName")
  .addEventListener("click", () => {
    document.getElementById("nameDialog").close();
    let text = document.getElementById("inputtedName").value;
    let outputPrompt = document.getElementById("outputPrompt");
    outputPrompt.innerText = "No name provided";
    outputPrompt.hidden = false;
  });
