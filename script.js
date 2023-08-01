function submit_cont(){
    let input_name=(document.getElementById('input_name').value)
    let input_number=Number.parseInt(document.getElementById('input_number').value)
    let display_success=document.getElementById('submit_success')
    if(input_name=="" || input_number==""){
        display_success.innerHTML="please Enter details"
    }else{
        localStorage.setItem(input_name,input_number)
        display_success.innerHTML="Contact Saved successfully"
    }
    setInterval(() => {
        display_success.innerHTML = '';
      }, 5000);
}