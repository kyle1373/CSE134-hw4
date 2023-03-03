const STORAGE_BLOG_ITEMS = "blog-items";
const STORAGE_BLOG_ITEM_TITLE = "title-input";
const STORAGE_BLOG_ITEM_SUMMARY = "summary-input";
const STORAGE_BLOG_ITEM_DATE = "date-input";

// Try to get the items
var items = JSON.parse(localStorage.getItem(STORAGE_BLOG_ITEMS)) || [];

var postIndex = -1;

const addPost = () => {
  let titleInput = document.getElementById("titleInput").value;
  let summaryInput = document.getElementById("summaryInput").value;

  if (titleInput === "" || summaryInput === "") {
    alert("You must input a valid title and summary");
    return;
  }

  const item = {};

  item[STORAGE_BLOG_ITEM_TITLE] = titleInput;
  item[STORAGE_BLOG_ITEM_SUMMARY] = summaryInput;
  titleInput.value = "";
  summaryInput.value = "";

  if (postIndex === -1) {
    // create new post
    (item[STORAGE_BLOG_ITEM_DATE] =
      new Date().toDateString("en-US") +
      " " +
      new Date().toTimeString("en-US")),
      items.push(item);
    localStorage.setItem(STORAGE_BLOG_ITEMS, JSON.stringify(items));
  } else {
    // edit existing post
    const pulledItem = items[postIndex];
    item[STORAGE_BLOG_ITEM_DATE] = pulledItem[STORAGE_BLOG_ITEM_DATE];
    items[postIndex] = item;
    localStorage.setItem(STORAGE_BLOG_ITEMS, JSON.stringify(items));
  }
  document.getElementById("titleInput").value = ""
  document.getElementById("summaryInput").value = ""
  showPosts();
};

const editPost = (index) => {
  postIndex = index;
  document.getElementById("dialog").showModal();
  document.getElementById("titleInput").value =
    items[index][STORAGE_BLOG_ITEM_TITLE];
  document.getElementById("summaryInput").value =
    items[index][STORAGE_BLOG_ITEM_SUMMARY];
};

const deletePost = (index) => {
  items.splice(index, 1);
  localStorage.setItem(STORAGE_BLOG_ITEMS, JSON.stringify(items));
  showPosts();
};

const showPosts = () => {
  const postList = document.getElementById("postList");
  postList.innerHTML = "";

  for (var i = 0; i < items.length; i++) {
    const currTitle = items[i][STORAGE_BLOG_ITEM_TITLE];
    const currDate = items[i][STORAGE_BLOG_ITEM_DATE];
    const currSummary = items[i][STORAGE_BLOG_ITEM_SUMMARY];

    const createdItem = document.createElement("li");

    createdItem.innerHTML =
      currTitle + " on " + currDate + " <br> " + currSummary + "<br><br>";

    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.setAttribute('onclick', 'editPost(' + i + ')');
    editButton.setAttribute('id', 'editButton');
    editButton.textContent = `✏`;

    deleteButton.setAttribute('onclick', 'deletePost(' + i + ')');
    editButton.setAttribute('id', 'deleteButton');
    deleteButton.textContent = '🗑';

    createdItem.appendChild(editButton);
    createdItem.appendChild(deleteButton);

    createdItem.innerHTML = createdItem.innerHTML + "<br><br>";
    postList.appendChild(createdItem);
  }
};

const showPostModal = () => {
  postIndex = -1;
  document.getElementById("dialog").showModal();
};

const hidePostModal = () => {
  document.getElementById("dialog").hideModal();
};

showPosts();