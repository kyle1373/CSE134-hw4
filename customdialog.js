const showAlert = () => {
  document.getElementById("alertDialog").showModal();
};

const showConfirm = () => {
  document.getElementById("confirmDialog").showModal();
};

const showName = () => {
  document.getElementById("nameDialog").showModal()
};

const okConfirm = () => {
  document.getElementById("outputPrompt").innerText = "Confirm result: true";
  document.getElementById("outputPrompt").hidden = false;
};

const cancelConfirm = () => {
    document.getElementById("outputPrompt").innerText = "Confirm result: false";
    document.getElementById("outputPrompt").hidden = false;
};

const okName = () => {
  document.getElementById("nameDialog").close();
  let text = document.getElementById("nameInput").value;
  let outputPrompt = document.getElementById("outputPrompt");
  outputPrompt.innerText = "Prompt result: " + text;
  outputPrompt.hidden = false;
};

const cancelName = () => {
    document.getElementById("nameDialog").close();
    let text = document.getElementById("inputtedName").value;
    let outputPrompt = document.getElementById("outputPrompt");
    outputPrompt.innerText = "No name provided";
    outputPrompt.hidden = false;
  };
