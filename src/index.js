import "./styles.css";
// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// $(function () {
//   $("h1").hide();
// });

$(function () {
  $("#hide-text").click(function () {
    $("#text").hide();
  });
});

$(function () {
  $("#fadeOut-text").click(function () {
    $("#text").fadeOut();
  });
});

$(function () {
  $("#slideUp-text").click(function () {
    $("#text").slideUp();
  });
});

$(function () {
  $("#show-text").click(function () {
    $("#hide").show();
  });
});

$(function () {
  $("#css-text").click(function () {
    $("#text").css("color", "red");
    $("#text").css("font-weight", "normal");
  });
});

$(function () {
  $("#text-text").click(function () {
    $("#text").text("changed");
  });
});

$(function () {
  $("#html-text").click(function () {
    $("#text").html('<a href="https://google.com">リンク</a>');
  });
});
