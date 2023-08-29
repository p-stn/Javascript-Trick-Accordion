const op = document.querySelector(".op")
const opy = document.querySelector(".opy")

io = document.querySelectorAll(".io")
iko = document.querySelectorAll(".inio")

const acr = (io) => {
    io.forEach((e, i) => {
        // for
        var ki = [0, 1, 2, 3, 4]

        var ok = e.children[1].clientHeight
        e.children[1].style.height = "0px"


        e.children[0].addEventListener("mousedown", function () {
            return () => {
                var flag = e.children[1].getAttribute('data-status')
                if (flag == 'off') {
                    e.children[1].style.height = ok + "px"
                    e.children[1].setAttribute('data-status', 'on')
                }
                else {
                    e.children[1].style.height = "0px"
                    e.children[1].setAttribute('data-status', 'off')
                }
                for (let k = 0; k < ki.length; k++) {
                    if (k != i) {
                        io[k].children[1].style.height = "0px"
                        io[k].children[1].setAttribute('data-status', 'off')

                    }

                }
            }
        }())
    })

}

acr(io)
