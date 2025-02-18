function ContactForm() {
    
  function handleclick(e) {
    e.preventDefault();
    console.log(e);
    if(e.target.tagName === "FORM"){
        console.log("Form submitted");
        console.log(e.target.elements.firstName.value);
        console.log(e.target.elements.lastName.value);
        console.log(e.target.elements.age.value);
    }
  }

  return (
    <form onSubmit={handleclick}>
      <input type="text" name="firstName" placeholder="Enter your first name" />
      <input type="text" name="lastName" placeholder="Enter your last name" />
      <input type="number" name="age" placeholder="Enter your age" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
