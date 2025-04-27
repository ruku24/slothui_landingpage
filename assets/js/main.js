   // FAQ Accordion
   const faqItems = document.querySelectorAll('.faq-item');
        
   faqItems.forEach(item => {
       const question = item.querySelector('.faq-question');
       
       question.addEventListener('click', () => {
           // Close all other items
           faqItems.forEach(otherItem => {
               if (otherItem !== item) {
                   otherItem.classList.remove('active');
               }
           });
           
           // Toggle current item
           item.classList.toggle('active');
       });
   });
   
   const hamburger = document.getElementById('hamburger');
   const menu = document.getElementById('menu');
   
   hamburger.addEventListener('click', () => {
     menu.classList.toggle('show');
   });
  


       