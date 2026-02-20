function showFilter() {
    let filterContentElement = document.getElementById("filterContent");
    filterContentElement.style.display = "block"; // Original display = "none"
}

function filterArticles() {
    // Opinion
    let opinionCheckboxElement = document.getElementById("opinionCheckbox").checked;
    let opinionClassElement = document.getElementsByClassName("opinion");
    
    // Recipe
    let recipeCheckboxElement = document.getElementById("recipeCheckbox").checked;
    let recipeClassElement = document.getElementsByClassName("recipe");

    // Update
    let updateCheckboxElement = document.getElementById("updateCheckbox").checked;
    let updateClassElement = document.getElementsByClassName("update");

    // Opinion loop
    for (let i = 0; i < opinionClassElement.length; i++) {
        if (opinionCheckboxElement) {
            opinionClassElement[i].style.display = "block";
        } else {
            opinionClassElement[i].style.display = "none";
        }
    }

    // Recipe loop
    for (let j = 0; j < recipeClassElement.length; j++) {
        if (recipeCheckboxElement) {
            recipeClassElement[j].style.display = "block";
        } else {
            recipeClassElement[j].style.display = "none";
        }
    }

    // Update loop
    for (let k = 0; k < updateClassElement.length; k++) {
        if (updateCheckboxElement) {
            updateClassElement[k].style.display = "block";
        } else {
            updateClassElement[k].style.display = "none";
        }
    } 
}

function showAddNew() {
    let newArticleElement = document.getElementById("newContent");
    newArticleElement.style.display = "flex"; // Original display = "none"
}

function addNewArticle() {
    // Title
    let titleText = document.getElementById("inputHeader").value;

    // Article body
    let bodyText = document.getElementById("inputArticle").value;
    
    // Class & marker
    let selectedClass = "";
    let markerLabel = "";

    // Apply style for inputs
    if (document.getElementById("opinionRadio").checked) {
        selectedClass = "opinion";
        markerLabel = "Opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        selectedClass = "recipe";
        markerLabel = "Recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        selectedClass = "update"; 
        markerLabel = "Update";
    }

    // DOM Article element 
    let newArticle = document.createElement("article");
    newArticle.classList.add(selectedClass); 

    // DOM Spam element
    let spanMarker = document.createElement("span");
    spanMarker.classList.add("marker");
    spanMarker.innerText = markerLabel;

    // DOM h2 element
    let h2Title = document.createElement("h2");
    h2Title.innerText = titleText;

    // DOM p element
    let pContent = document.createElement("p");
    pContent.innerText = bodyText;

    newArticle.appendChild(spanMarker);
    newArticle.appendChild(h2Title);
    newArticle.appendChild(pContent);

    // Adds article to end
    document.getElementById("articleList").appendChild(newArticle);
}

