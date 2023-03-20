import { Button } from "react-bootstrap";
import { TbArrowUpCircle } from "react-icons/tb";

const ButtonBackToTop = () => {
    let mybutton;
    window.onscroll = function () {
        mybutton = document.getElementById("btn-back-to-top");
        scrollFunction(mybutton)
    }
    function scrollFunction(mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display= "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <Button 
            onClick={backToTop}
            id="btn-back-to-top"
            className="btn-floating bg-danger"
            size="sm"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                display: "none",
              }}
        >
            <TbArrowUpCircle />
        </Button>
    );
}

export default ButtonBackToTop;