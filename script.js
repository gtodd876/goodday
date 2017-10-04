let mykey = config.MY_API_KEY;
let myProjectId = config.MY_PROJECT_ID;

let instance = axios.create({
  baseURL: myProjectId,
  timeout: 2000,
  headers: { "X-TrackerToken": mykey }
});

instance
  .get()
  .then(function(response) {
    let allStories = response.data;
    let todoStories = [];
    let reviewStories = [];
    let inprogressStories = [];
    let doneStories = [];
    
    organizeStories(
      allStories,
      todoStories,
      reviewStories,
      inprogressStories,
      doneStories
    );
    displayStories(todoStories, reviewStories, inprogressStories, doneStories);
    initializeDragAndDrop();
    
  })
  .catch(function(error) {
    console.log(error);
  });
  
  function organizeStories(
    allStories,
    todoStories,
    reviewStories,
    inprogressStories,
    doneStories
  ) {
    for (let i = 0; i < allStories.length; i++) {
      if (
        allStories[i].current_state === "unscheduled" ||
        allStories[i].current_state === "unstarted"
      )
      todoStories.push(allStories[i]);
      if (
        allStories[i].current_state === "started" ||
        allStories[i].current_state === "rejected" 
      ) {
        inprogressStories.push(allStories[i]);
      }
      
      if (allStories[i].current_state === "finished") {
        reviewStories.push(allStories[i]);
      }
      if (
        allStories[i].current_state === "delivered" ||
        allStories[i].current_state === "accepted"
      )
      doneStories.push(allStories[i]);
    }
  }
  
  function displayStories(...storyColumns) {
      storyColumns.forEach(function(columns) {
        columns.forEach(function(story) {
          let storyUrl = story.url;
          let statusBadge = story.current_state;
          let estimate = story.estimate;
          let storyId = story.id; 
          appendStory(story, storyUrl, statusBadge, estimate, storyId);
      });
    });
  }

function gravatar(email, options) {
  // using md5() from here: http://www.myersdaily.org/joseph/javascript/md5-text.html
  function md5cycle(e, t) {
    var n = e[0],
      r = e[1],
      i = e[2],
      s = e[3];
    n = ff(n, r, i, s, t[0], 7, -680876936);
    s = ff(s, n, r, i, t[1], 12, -389564586);
    i = ff(i, s, n, r, t[2], 17, 606105819);
    r = ff(r, i, s, n, t[3], 22, -1044525330);
    n = ff(n, r, i, s, t[4], 7, -176418897);
    s = ff(s, n, r, i, t[5], 12, 1200080426);
    i = ff(i, s, n, r, t[6], 17, -1473231341);
    r = ff(r, i, s, n, t[7], 22, -45705983);
    n = ff(n, r, i, s, t[8], 7, 1770035416);
    s = ff(s, n, r, i, t[9], 12, -1958414417);
    i = ff(i, s, n, r, t[10], 17, -42063);
    r = ff(r, i, s, n, t[11], 22, -1990404162);
    n = ff(n, r, i, s, t[12], 7, 1804603682);
    s = ff(s, n, r, i, t[13], 12, -40341101);
    i = ff(i, s, n, r, t[14], 17, -1502002290);
    r = ff(r, i, s, n, t[15], 22, 1236535329);
    n = gg(n, r, i, s, t[1], 5, -165796510);
    s = gg(s, n, r, i, t[6], 9, -1069501632);
    i = gg(i, s, n, r, t[11], 14, 643717713);
    r = gg(r, i, s, n, t[0], 20, -373897302);
    n = gg(n, r, i, s, t[5], 5, -701558691);
    s = gg(s, n, r, i, t[10], 9, 38016083);
    i = gg(i, s, n, r, t[15], 14, -660478335);
    r = gg(r, i, s, n, t[4], 20, -405537848);
    n = gg(n, r, i, s, t[9], 5, 568446438);
    s = gg(s, n, r, i, t[14], 9, -1019803690);
    i = gg(i, s, n, r, t[3], 14, -187363961);
    r = gg(r, i, s, n, t[8], 20, 1163531501);
    n = gg(n, r, i, s, t[13], 5, -1444681467);
    s = gg(s, n, r, i, t[2], 9, -51403784);
    i = gg(i, s, n, r, t[7], 14, 1735328473);
    r = gg(r, i, s, n, t[12], 20, -1926607734);
    n = hh(n, r, i, s, t[5], 4, -378558);
    s = hh(s, n, r, i, t[8], 11, -2022574463);
    i = hh(i, s, n, r, t[11], 16, 1839030562);
    r = hh(r, i, s, n, t[14], 23, -35309556);
    n = hh(n, r, i, s, t[1], 4, -1530992060);
    s = hh(s, n, r, i, t[4], 11, 1272893353);
    i = hh(i, s, n, r, t[7], 16, -155497632);
    r = hh(r, i, s, n, t[10], 23, -1094730640);
    n = hh(n, r, i, s, t[13], 4, 681279174);
    s = hh(s, n, r, i, t[0], 11, -358537222);
    i = hh(i, s, n, r, t[3], 16, -722521979);
    r = hh(r, i, s, n, t[6], 23, 76029189);
    n = hh(n, r, i, s, t[9], 4, -640364487);
    s = hh(s, n, r, i, t[12], 11, -421815835);
    i = hh(i, s, n, r, t[15], 16, 530742520);
    r = hh(r, i, s, n, t[2], 23, -995338651);
    n = ii(n, r, i, s, t[0], 6, -198630844);
    s = ii(s, n, r, i, t[7], 10, 1126891415);
    i = ii(i, s, n, r, t[14], 15, -1416354905);
    r = ii(r, i, s, n, t[5], 21, -57434055);
    n = ii(n, r, i, s, t[12], 6, 1700485571);
    s = ii(s, n, r, i, t[3], 10, -1894986606);
    i = ii(i, s, n, r, t[10], 15, -1051523);
    r = ii(r, i, s, n, t[1], 21, -2054922799);
    n = ii(n, r, i, s, t[8], 6, 1873313359);
    s = ii(s, n, r, i, t[15], 10, -30611744);
    i = ii(i, s, n, r, t[6], 15, -1560198380);
    r = ii(r, i, s, n, t[13], 21, 1309151649);
    n = ii(n, r, i, s, t[4], 6, -145523070);
    s = ii(s, n, r, i, t[11], 10, -1120210379);
    i = ii(i, s, n, r, t[2], 15, 718787259);
    r = ii(r, i, s, n, t[9], 21, -343485551);
    e[0] = add32(n, e[0]);
    e[1] = add32(r, e[1]);
    e[2] = add32(i, e[2]);
    e[3] = add32(s, e[3]);
  }
  function cmn(e, t, n, r, i, s) {
    t = add32(add32(t, e), add32(r, s));
    return add32((t << i) | (t >>> (32 - i)), n);
  }
  function ff(e, t, n, r, i, s, o) {
    return cmn((t & n) | (~t & r), e, t, i, s, o);
  }
  function gg(e, t, n, r, i, s, o) {
    return cmn((t & r) | (n & ~r), e, t, i, s, o);
  }
  function hh(e, t, n, r, i, s, o) {
    return cmn(t ^ n ^ r, e, t, i, s, o);
  }
  function ii(e, t, n, r, i, s, o) {
    return cmn(n ^ (t | ~r), e, t, i, s, o);
  }
  function md51(e) {
    txt = "";
    var t = e.length,
      n = [1732584193, -271733879, -1732584194, 271733878],
      r;
    for (r = 64; r <= e.length; r += 64) {
      md5cycle(n, md5blk(e.substring(r - 64, r)));
    }
    e = e.substring(r - 64);
    var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (r = 0; r < e.length; r++)
      i[r >> 2] |= e.charCodeAt(r) << ((r % 4) << 3);
    i[r >> 2] |= 128 << ((r % 4) << 3);
    if (r > 55) {
      md5cycle(n, i);
      for (r = 0; r < 16; r++) i[r] = 0;
    }
    i[14] = t * 8;
    md5cycle(n, i);
    return n;
  }
  function md5blk(e) {
    var t = [],
      n;
    for (n = 0; n < 64; n += 4) {
      t[n >> 2] =
        e.charCodeAt(n) +
        (e.charCodeAt(n + 1) << 8) +
        (e.charCodeAt(n + 2) << 16) +
        (e.charCodeAt(n + 3) << 24);
    }
    return t;
  }
  function rhex(e) {
    var t = "",
      n = 0;
    for (; n < 4; n++)
      t += hex_chr[(e >> (n * 8 + 4)) & 15] + hex_chr[(e >> (n * 8)) & 15];
    return t;
  }
  function hex(e) {
    for (var t = 0; t < e.length; t++) e[t] = rhex(e[t]);
    return e.join("");
  }
  function md5(e) {
    return hex(md51(e));
  }
  function add32(e, t) {
    return (e + t) & 4294967295;
  }
  var hex_chr = "0123456789abcdef".split("");
  if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") {
    function add32(e, t) {
      var n = (e & 65535) + (t & 65535),
        r = (e >> 16) + (t >> 16) + (n >> 16);
      return (r << 16) | (n & 65535);
    }
  }
  //check to make sure you gave us something
  var options = options || {},
    base,
    params = [];

  //set some defaults, just in case
  options = {
    size: options.size || "50",
    rating: options.rating || "g",
    secure: options.secure || location.protocol === "https:",
    backup: options.backup || ""
  };

  //setup the email address
  email = email.trim().toLowerCase();

  //determine which base to use
  base = options.secure
    ? "https://secure.gravatar.com/avatar/"
    : "http://www.gravatar.com/avatar/";

  //add the params
  if (options.rating) {
    params.push("r=" + options.rating);
  }
  if (options.backup) {
    params.push("d=" + encodeURIComponent(options.backup));
  }
  if (options.size) {
    params.push("s=" + options.size);
  }

  //now throw it all together
  return base + md5(email) + "?" + params.join("&");
}

function getEmailAddress(id) {
  if (id === 2977522) {
    return "gtmatthews@gmail.com";
  } else if (id === 148385) {
    return "andrew@andrewcox.org";
  } else return "test@test.com";
}

function appendStory(story, storyUrl, statusBadge, estimate, storyId) {
  let storyType = story.story_type;
  let email = getEmailAddress(story.owned_by_id);
  let urlForGravatar = gravatar(email, {size: "30"});
  if (estimate === undefined) estimate = "";
  $("div[data-accepts~='" + statusBadge + "']").append(
    "<div class='" + storyType + " card" + "' data-id='" + storyId + "'>" +
    "<a href='" + storyUrl + "'>" +
    "<p class=name>" + story.name + "</p></a>" + 
    "<img src='" + urlForGravatar + "'>" +
    "<p class='estimate'>" + estimate + "</p>" + 
    "<p class='status-badge " + statusBadge + "'>" + statusBadge + "</p>" + 
    "</div>"
  );
}

function initializeDragAndDrop () {
  $(".js-board").sortable({
    connectWith: ".js-board",
    beforeStop: function (event, ui) {
    
    },
    stop: function(event, ui) {
      let isChore = $(ui.item[0]).is(".chore");
      let isReviewColumn =  $(ui.item).parents().is(".ready-for-review");
      if (isChore && isReviewColumn) {
        $(this).sortable("cancel");  
        $(".ready-for-review").toggleClass("warn", 700, "easeOutSine", function() {
          $(".ready-for-review").removeClass("warn", 700);
        });
      }
      updatePivotal(ui);
    }
  
  });
} //end initializeDragAndDrop

function updatePivotal(ui) {
    let id = ui.item.data("id");
    let newStatus = ui.item.closest(".js-board").data("status");
    let afterId = ui.item.prev().data("id");
    let beforeId = ui.item.next().data("id");
    let urlId = "/" + ui.item.data("id");
    let currentCard = ui.item;
    if (beforeId === undefined) beforeId = null;
    if (afterId === undefined) afterId = null;
    if (newStatus === "accepted") {
      instance.put("/" + id, {
      "current_state": newStatus
      })
      .then(function(response) {
        currentCard.find(".status-badge").removeClass()
        .addClass("status-badge " + response.data.current_state)
        .text(response.data.current_state);
        
      })
      .catch(function(error) {
      console.log(error);
      });
    } else {
      instance.put("/" + id, {
        "current_state": newStatus,
        "after_id": afterId,
        "before_id": beforeId
        })
        .then(function(response) {
          currentCard.find(".status-badge").removeClass()
          .addClass("status-badge " + response.data.current_state)
          .text(response.data.current_state);
          
        })
        .catch(function(error) {
        console.log(error);
        });
      }

} // end of updatePivotal

