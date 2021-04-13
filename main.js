var canvas = new fabric.Canvas('myCanvas');
twilight_x = 10; 
twilight_y = 10; 
wing_image_width = 30; 
wing_image_height = 30; 
var twilight_object= "";
var wing_image_object= "";
function twilight_update()
{ 
  fabric.Image.fromURL("twilight.png", function(Img) 
 { twilight_object = Img; 
   twilight_object.scaleToWidth(150);
   twilight_object.scaleToHeight(140); 
   twilight_object.set({ top:twilight_y, left:twilight_x }); 
   canvas.add(twilight_object); 
 }
  )
  ;
}
function new_image(get_image) 
 { 
   fabric.Image.fromURL(get_image, function(Img) 
   { 
       wing_image_object = Img; 
       wing_image_object.scaleToWidth(wing_image_width); 
       wing_image_object.scaleToHeight(wing_image_height); 
       wing_image_object.set({ top:twilight_y, left:twilight_x 
    }); 
    canvas.add(wing_image_object); 
   }
   )
   ; 
 }