$("#billing").validate({submitHandler:function(){$.post("../action/post_billing.php",$("#billing").serialize(),function(){setTimeout(function(){window.location.assign("confirm_card")},3e3)})}});
