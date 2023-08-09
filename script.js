function validte(){
        let x = document.forms["validate"]["name"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }