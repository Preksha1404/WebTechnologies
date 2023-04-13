function Vald()
{
    const selval=document.querySelector('input[name="branch"]:checked');
    const id_val=document.getElementById('StudentID');
    //alert((id_val.value==""));
    const contact_no=document.getElementById('contactNumber').value;
    //alert(contact_no);    contactNO ==""  Institute       semester ===""
    const Inst=document.getElementById('Institute').value;
    const sem=document.getElementById('semester').value;
    try{
            if(id_val.value=="")
            {
                throw "ID INVALID!";
            }
            else if(selval==null)
            {
                throw "Branch Not selected"; 
            }
            else if(contact_no=="" || Inst=="" || sem=="")
            {
                throw "there are empty fields";
            }
            else{
                document.write("Successfully submitted !");
            }
    }
    catch(err)
    {
        alert(err);
        cancelFormSubmission();
    }
    finally{
        
    }
}