$(document).ready(function () {

      // Funcion de formulario multipasos
      let fieldset_1 = $('#form-fil-1');   
      let fieldset_2 = $('#form-fil-2'); 
      let fieldset_3 = $('#form-fil-3');     
   
   
      // Primer formulario
      $(fieldset_1).on("click", "input#siguiente", function () {
          if (fieldset_1.hasClass('active')) {
              fieldset_1.removeClass('active');
              fieldset_2.addClass('active');   
          }
      });
   
      // Segundo formulario
      $(fieldset_2).on("click", "input#siguiente", function() {
          if (fieldset_2.hasClass('active')) {
              fieldset_2.removeClass('active');
              fieldset_3.addClass('active');   
          }
      });
   
      $(fieldset_2).on("click", "input#anterior", function() {
          if (fieldset_2.hasClass('active')) {
              fieldset_2.removeClass('active');
              fieldset_1.addClass('active');   
          }
      });
   
      // Tercer Formulario
      $(fieldset_3).on("click", "input#anterior", function() {
          if (fieldset_3.hasClass('active')) {
              fieldset_3.removeClass('active');
              fieldset_2.addClass('active');   
          }
      });
   

    let table = $('#data').DataTable({      
         language: {
         "decimal": "",
         "emptyTable": "No hay información",
         "info": "Mostrando _START_ / _END_ de _TOTAL_ Entradas",
         "inforEmpty": "Mostrando 0 to 0 of 0 Entradas",
         "infoFiltered": "(Filtrado de _MAX_ total entradas)",
         "inforPostFix": "",
         "thousands": ",",
         "lengthMenu": "Mostrar _MENU_ Entradas",
         "loadingRecords": "Cargando...",
         "processing": "Procesando...",
         "search": "Buscar:",
         "zeroRecords": "Sin resultados encontrados",
         "showRecords": "Mostrar _TOTAL_ Entradas",
         "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior",
         }
      }   
   });

   



     $(`#data tbody`).on('click', '#mdl-active', function() {
      
         let modal = $('#miModal');
         modal.fadeIn(500);

         $('.close').click(function() {
            modal.fadeOut(500);
         });
         
     });






});