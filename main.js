document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.list');
    const itemBoxes = document.querySelectorAll('.itemBox');
    //para cada botao adiconei o evento click para selecionar o valor do filtro e trocar as classes do butao
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = button.getAttribute('data-filter');
        filterItems(filterValue); // filtro
        toggleActiveClass(button); //troca classe botao
      });
    });
  
    function filterItems(filter) { //recebe o parametro de filtro
      itemBoxes.forEach(itemBox => { //para cada item da lista pega o valor da data-imagem
        const dataImagem = itemBox.getAttribute('data-imagem');
        if (filter === 'all' || filter === dataImagem) {
          itemBox.style.display = 'block';
        } else {
          itemBox.style.display = 'none';
        }
      });
    }
  
    function toggleActiveClass(activeButton) { //troca as classes do botão
      filterButtons.forEach(button => {
        button.classList.remove('active');
      });
      activeButton.classList.add('active');
    }
  });
  