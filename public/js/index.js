// Get references to page elements
var $choreTitle = $("#chore-title");
var $choreDescription = $("#chore-description");
var $chorePoints = $("#chore-points");
var $choreCompleted = $("#chore-completed");
var $submitBtn = $("#submit");
var $submitUser = $("#submit-user");
var $choreList = $("#chore-list");
var $userName = $("#userName");

// The API object contains methods for each kind of request we'll make
var API = {
  saveChore: function(chore) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/chores",
      data: JSON.stringify(chore)
    });
  },
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  getUsers: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },
  getChores: function() {
    return $.ajax({
      url: "api/chores",
      type: "GET"
    });
  },
  deleteChore: function(id) {
    return $.ajax({
      url: "api/chores/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshChores = function() {
  API.getChores().then(function(data) {
    var $chores = data.map(function(chore) {
      var $a = $("<a>")
        .text(chore.title)
        .attr("href", "/chore/" + chore.id);

      var $b = $("<a>")
        .text(chore.points)
        .attr("href", "/chore/" + chore.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": chore.id
        })
        .append($a)
        .append($b);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $choreList.empty();
    $choreList.append($chores);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var chore = {
    title: $choreTitle.val().trim(),
    description: $choreDescription.val().trim(),
    points: $chorePoints.val().trim()
  };

  if (!(chore.title && chore.description && chore.points)) {
    alert("You must enter a chore text, description and points!");
    return;
  }

  API.saveChore(chore).then(function() {
    refreshChores();
  });

  $choreTitle.val("");
  $choreDescription.val("");
  $chorePoints.val("");
};

// 
var refreshUsers = function() {
  API.getUsers().then(function(data) {
    var $users = data.map(function(chore) {
      var $a = $("<a>")
        .text(user.name)
        .attr("href", "/chore/" + chore.id);

      return $a;
    });

    $choreList.empty();
    $choreList.append($chores);
  });
};





// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteChore(idToDelete).then(function() {
    refreshChores();
  });
};

// updateUserChore is called whenever a user completes a chore
// Save the new example to the db and refresh the list
var updateUserChore = function(event) {
  event.preventDefault();

  var user = {
    name: $userName.val().trim()
  };

  if (!user.name) {
    alert("You must enter your name!");
    return;
  }

  API.saveUser(user).then(function() {
    // refreshChores();
  });

  $userName.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$choreList.on("click", ".delete", handleDeleteBtnClick);
$submitUser.on("click", updateUserChore);
