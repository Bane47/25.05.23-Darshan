function snap(){
    $(document).ready(function() {
        $('#snapButton').click(function() {
          $('.snap-item').each(function() {
            if (Math.random() < 0.5) {
              $(this).addClass('fade');
            }
          });
        });
      });
}
snap()