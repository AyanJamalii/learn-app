function Alert(props) {

  const capitalize = (word = "") => {
    // Providing a default empty string to 'word'
    const lower = word.toLowerCase();  // 'word' is guaranteed to be a string now
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert;
