var canvas = new fabric.Canvas("My_canvas");
var player_X = 10;
var player_Y = 10;
var block_height = 25;
var block_width = 25;
player_object = "";
blocks_image = "";



function player_update() {
    fabric.Image.fromURL("fireiceherobrine.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_Y,
            left: player_X
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blocks_image = Img;
        blocks_image.scaleToWidth(block_width);
        blocks_image.scaleToHeight(block_height);
        blocks_image.set({
            top: player_Y,
            left: player_X
        });
        canvas.add(blocks_image);
    });
}

window.addEventListener("keydown", keydown);

function keydown(e) {

    keypressed = e.keyCode;

    if (e.shiftKey == true && keypressed == '80') {

        block_width = block_width + 10;
        block_height = block_height + 10;

        document.getElementByTd("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (e.shiftKey == true && keypressed == '77') {

        block_width = block_width - 10;
        block_height = block_height - 10;

        document.getElementByTd("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }





    if (keypressed == '38') {
        up();
    }

    if (keypressed == '40') {
        down();
    }

    if (keypressed == '37') {
        left();
    }

    if (keypressed == '39') {
        right();
    }








    if (keypressed == '87') {
        new_image('brick_wall.jpg')
    }

    if (keypressed == '71') {
        new_image('grass_block.png')
    }

    if (keypressed == '76') {
        new_image('light_grass_block.png')
    }

    if (keypressed == '84') {
        new_image('oak_log.png')
    }

    if (keypressed == '82') {
        new_image('nether_rack.jpg')
    }

    if (keypressed == '89') {
        new_image('yellow_brick_wall.png')
    }

    if (keypressed == '68') {
        new_image('dark_grass_block.png')
    }

    if (keypressed == '85') {
        new_image('glowstone.png')
    }

    if (keypressed == '67') {
        new_image('stone_block.jpg')
    }

}

function up() {
    if (player_Y >= 0) {
        player_Y = player_Y - block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_Y <= 400) {
        player_Y = player_Y + block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_X >= 0) {
        player_X = player_X + block_width;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_X <= 900) {
        player_X = player_X + block_width;
        canvas.remove(player_object);
        player_update();
    }
}