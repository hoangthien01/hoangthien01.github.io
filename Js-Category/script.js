
//Img preview
const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
inpFile.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";
        reader.addEventListener("load", function () {
            previewImage.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    } else {
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src", null);
    }
});

let input = document.getElementsByClassName("input");
let itemName = document.getElementById("itemName");
let select = document.getElementById("select");
let notice = document.getElementsByClassName("notice");
let item = [];
let beforeImg;

function setRow() {
    let number = 0;
    $('#input-group').empty();
    $("#input-group").append("<li class='item-row'>" +
        "<div class='item1'>" + "#" + "</div>" +
        "<div class='item2'>" + "ItemName" + "</div>" +
        "<div class='item2'>" + "Category" + "</div>" +
        "<div class='item2'>" + "Image" + "</div>" +
        "<div class='item1'>" + "Action" + "</div>" +
        "</li>")

    for (let i in item) {
        $("#input-group").append("<li class='item-row'>" +
            "<div class='item1'>" + (parseInt(i) + 1) + "</div>" +
            "<div class='item2'>" +
            "<input class='input-row' readonly style = 'cursor: default';>" +
            "<p class='notify'> " + "Name is required" + "</p>" +
            "</div>" +
            "<div class='item2'>" +
            "<select class= 'input-row' disabled='true'>" +
            "<option value='Category 1'>" + "Category 1" + "</option> " +
            "<option value='Category 2'>" + "Category 2" + "</option> " +
            "<option value='Category 3'>" + "Category 3" + "</option> " +
            "</select>" +
            "</div>" +
            "<div class='item2'>" +
            "<input type='file' name='Choose file' class='inpFile'style= 'display: none' accept='image/jpeg,image/png'>" +
            "<div class='image-preview'>" + "<img class='img'>" + "</div>" +
            "</div>" +
            "<div class='item1'>" + "<div class='btn btn-edit'>" + "Edit" + "</div>" +
            "<div class='btn btn-save ' style =' display:none;'>" + "Save" + "</div>" +
            "<div class='btn btn-cancel ' style =' display:none;'>" + "Cancel" + "</div>" +
            "<div class='btn btn-delete'>" + "Delete" + "</div>"
            + "</div>" +
            "</li>")
        let n = number;
        $(".input-row")[number].value = item[i].name;
        $(".input-row")[number + 1].value = item[i].category;
        $('.img')[i].src = item[i].imgsrc;

        //add moi vao local
        const setjson = JSON.stringify(item[i]);
        localStorage.setItem(i, setjson);

        //Button Delete click
        $($('.btn-delete')[i]).click(function () {
            item.splice(i, 1);
            setRow();
            // reset lai local
            localStorage.clear();
            for (let i in item) {
                const setjson = JSON.stringify(item[i]);
                localStorage.setItem(i, setjson);
            }
        });

        //Button edit click
        $($('.btn-edit')[i]).click(function () {
            this.style.display = 'none';
            $('.inpFile')[i].style.display = 'block';
            $('.btn-delete')[i].style.display = 'none';
            $('.btn-save')[i].style.display = 'inline-block';
            $('.btn-cancel')[i].style.display = 'inline-block';

            //lay du lieu cua item truoc khi chon edit
            $($(".input-row")[n]).attr('readonly', false);
            $(".input-row")[n].style.cursor = "text";
            $($(".input-row")[n + 1]).attr('disabled', false);
            beforeImg = item[i].imgsrc;

            //preview image cho moi row
            let inpFile = document.getElementsByClassName("inpFile");
            let previewImage = document.getElementsByClassName("img");
            inpFile[i].addEventListener("change", function () {
                let file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    previewImage[i].style.display = "block";
                    reader.addEventListener("load", function () {
                        previewImage[i].setAttribute("src", this.result);
                        item[i].imgsrc = this.result;
                    });
                    reader.readAsDataURL(file);
                } else {
                    previewImage[i].style.display = null;
                    previewImage[i].setAttribute("src", null);
                }
            });
        });

        // button save click
        $($('.btn-save')[i]).click(function () {
            let empty = false;
            //check input Name
            if ($(".input-row")[n].value == "" || $(".input-row")[n].value.charCodeAt(0) >= 48 && $(".input-row")[n].value.charCodeAt(0) <= 57) {
                $(".notify")[i].style.display = "block";
                empty = true;
            }
            if (empty == false) {
                //update du lieu vao mang item
                let itemChange = {
                    "name": $(".input-row")[n].value,
                    "category": $(".input-row")[n + 1].value,
                    "imgsrc": $('.img')[i].src
                };
                item.splice(i, 1, itemChange);

                //update du lieu len local storage
                const setjson = JSON.stringify(item[i]);
                localStorage.setItem(i, setjson);
                this.style.display = 'none';
                $('.inpFile')[i].style.display = 'none';
                $('.btn-cancel')[i].style.display = 'none';
                $('.btn-edit')[i].style.display = 'inline-block';
                $('.btn-delete')[i].style.display = 'inline-block';
                $($(".input-row")[n]).attr('readonly', true);
                $($(".input-row")[n + 1]).attr('disabled', true);

                $(".notify")[i].style.display = "none";
            }
        });

        //Button Cancel click
        $($('.btn-cancel')[i]).click(function () {
            $(".notify")[i].style.display = "none";
            this.style.display = 'none';
            $('.inpFile')[i].style.display = 'none';
            $('.btn-save')[i].style.display = 'none';
            $('.btn-edit')[i].style.display = 'inline-block';
            $('.btn-delete')[i].style.display = 'inline-block';
            $($(".input-row")[n]).attr('readonly', true);
            $($(".input-row")[n + 1]).attr('disabled', true);

            //chon edit xong k chon save ma chon cacel
            $(".input-row")[n].value = item[i].name;
            $(".input-row")[n + 1].value = item[i].category;
            $('.img')[i].src = beforeImg;
        });
        number += 2;
    }
}

//Button Submit click
$("#submit").click(() => {
    let checkEmpty = true;
    if (itemName.value == "" || itemName.value.charCodeAt(0) >= 48 && itemName.value.charCodeAt(0) <= 57) {
        notice[0].style.display = " block";
        checkEmpty = false;
    } else {
        notice[0].style.display = " none";
    }
    if (select.options[select.selectedIndex].value == -1) {
        notice[1].style.display = " block";
        checkEmpty = false;
    } else {
        notice[1].style.display = "none";
    }
    if (checkEmpty) {
        item.push({
            "name": itemName.value,
            "category": select.options[select.selectedIndex].value,
            "imgsrc": $('.image-preview__image').attr('src')
        });
        setRow();

        //submit thanh cong, set input ve default
        itemName.value = "";
        select.selectedIndex = 0;
        $(".image-preview__image").attr('src', "");
    }
})

$("#form").submit((e) => {
    e.preventDefault();
})

// set lai du lieu khi reload trang
function load() {
    for (let j = 0; j < localStorage.length; j++) {
        const obj = JSON.parse(localStorage.getItem(j));
        item[j] = obj;
    }
    setRow();
}
