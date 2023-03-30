function NavBar(props) {
  return (
    <section>
      <button onClick={props.pastClick}>Précédent</button>
      <button onClick={props.nextClick}>Suivant</button>
    </section>
  );
}

export default NavBar;
