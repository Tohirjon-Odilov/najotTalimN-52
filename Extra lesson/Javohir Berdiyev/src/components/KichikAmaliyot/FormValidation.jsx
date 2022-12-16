function FormValidation({ valueLength }) {
  let validationMessage = "Text to short!";
  let alertClass = "alert alert-danger";
  if (valueLength > 5) {
    validationMessage = "Text long enough";
    alertClass = "alert alert-info";
  }
  return (
    <div className={""}>
      <div className={alertClass}>{validationMessage}</div>
    </div>
  );
}

export default FormValidation;
