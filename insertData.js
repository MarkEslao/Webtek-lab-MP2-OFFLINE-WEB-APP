function save(){
        
          var name = document.getElementById('input_tag_id').value;
          var  couryear = document.getElementById('input_tag_id').value;
          var athlete = [{name: name, cy: couryear}];
               
          athlete.push(JSON.parse(localStorage.getItem('athlete')));
          localStorage.setItem('athlete', JSON.stringify(athlete));
        
}