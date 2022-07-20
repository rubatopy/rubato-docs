Search.setIndex({docnames:["api","defaults","events","index","intro","key-names","tutorials","tutorials/advanced","tutorials/advanced/perlin","tutorials/advanced/pixel_mutation","tutorials/platformer","tutorials/platformer/step1","tutorials/platformer/step2","tutorials/platformer/step3","tutorials/platformer/step4","tutorials/platformer/step5","tutorials/platformer/step6","tutorials/platformer/step7"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","defaults.rst","events.rst","index.rst","intro.rst","key-names.rst","tutorials.rst","tutorials\\advanced.rst","tutorials\\advanced\\perlin.rst","tutorials\\advanced\\pixel_mutation.rst","tutorials\\platformer.rst","tutorials\\platformer\\step1.rst","tutorials\\platformer\\step2.rst","tutorials\\platformer\\step3.rst","tutorials\\platformer\\step4.rst","tutorials\\platformer\\step5.rst","tutorials\\platformer\\step6.rst","tutorials\\platformer\\step7.rst"],objects:{"rubato.classes":[[0,1,0,"-","camera"],[0,1,0,"-","game_object"],[0,1,0,"-","group"],[0,1,0,"-","scene"],[0,1,0,"-","scene_manager"],[0,1,0,"-","ui"]],"rubato.classes.camera":[[0,2,1,"","Camera"]],"rubato.classes.camera.Camera":[[0,3,1,"","__init__"],[0,4,1,"","pos"],[0,3,1,"","scale"],[0,3,1,"","transform"],[0,4,1,"","z_index"],[0,5,1,"","zoom"]],"rubato.classes.components":[[0,1,0,"-","animation"],[0,1,0,"-","component"],[0,1,0,"-","hitbox"],[0,1,0,"-","image"],[0,1,0,"-","rigidbody"],[0,1,0,"-","spritesheet"],[0,1,0,"-","text"]],"rubato.classes.components.animation":[[0,2,1,"","Animation"]],"rubato.classes.components.animation.Animation":[[0,3,1,"","__init__"],[0,4,1,"","aa"],[0,3,1,"","add"],[0,3,1,"","add_folder"],[0,3,1,"","add_spritesheet"],[0,5,1,"","anim_frame"],[0,3,1,"","anim_tick"],[0,4,1,"","animation_frames_left"],[0,3,1,"","clone"],[0,5,1,"","current_frame"],[0,4,1,"","current_state"],[0,4,1,"","default_state"],[0,3,1,"","delete"],[0,3,1,"","draw"],[0,4,1,"","flipx"],[0,4,1,"","flipy"],[0,5,1,"","fps"],[0,5,1,"","image"],[0,4,1,"","loop"],[0,3,1,"","reset"],[0,3,1,"","resize"],[0,4,1,"","rotation"],[0,3,1,"","set_current_state"],[0,3,1,"","setup"],[0,4,1,"","visible"]],"rubato.classes.components.component":[[0,2,1,"","Component"]],"rubato.classes.components.component.Component":[[0,3,1,"","__init__"],[0,3,1,"","clone"],[0,3,1,"","delete"],[0,3,1,"","draw"],[0,3,1,"","fixed_update"],[0,4,1,"","gameobj"],[0,4,1,"","offset"],[0,3,1,"","setup"],[0,4,1,"","singular"],[0,3,1,"","update"]],"rubato.classes.components.hitbox":[[0,2,1,"","Circle"],[0,2,1,"","ColInfo"],[0,2,1,"","Hitbox"],[0,2,1,"","Polygon"],[0,2,1,"","Rectangle"],[0,2,1,"","SAT"]],"rubato.classes.components.hitbox.Circle":[[0,3,1,"","__init__"],[0,3,1,"","clone"],[0,3,1,"","draw"],[0,4,1,"","radius"],[0,4,1,"","scale"],[0,3,1,"","transformed_radius"]],"rubato.classes.components.hitbox.ColInfo":[[0,3,1,"","__init__"],[0,3,1,"","flip"],[0,4,1,"","seperation"],[0,4,1,"","shape_a"],[0,4,1,"","shape_b"]],"rubato.classes.components.hitbox.Hitbox":[[0,3,1,"","__init__"],[0,3,1,"","bounding_box_dimensions"],[0,3,1,"","collide"],[0,4,1,"","color"],[0,4,1,"","debug"],[0,4,1,"","on_collide"],[0,3,1,"","overlap"],[0,5,1,"","pos"],[0,4,1,"","scale"],[0,4,1,"","tag"],[0,4,1,"","trigger"],[0,3,1,"","update"]],"rubato.classes.components.hitbox.Polygon":[[0,3,1,"","__init__"],[0,3,1,"","bounding_box_dimensions"],[0,3,1,"","clone"],[0,3,1,"","draw"],[0,3,1,"","generate_polygon"],[0,3,1,"","real_verts"],[0,4,1,"","scale"],[0,3,1,"","transformed_verts"],[0,4,1,"","verts"]],"rubato.classes.components.hitbox.Rectangle":[[0,3,1,"","__init__"],[0,5,1,"","bottom"],[0,5,1,"","bottom_left"],[0,5,1,"","bottom_right"],[0,3,1,"","clone"],[0,3,1,"","draw"],[0,4,1,"","height"],[0,3,1,"","real_verts"],[0,4,1,"","rotation"],[0,5,1,"","top_left"],[0,5,1,"","top_right"],[0,3,1,"","transformed_verts"],[0,3,1,"","vertices"],[0,4,1,"","width"]],"rubato.classes.components.hitbox.SAT":[[0,3,1,"","circle_circle_test"],[0,3,1,"","circle_polygon_test"],[0,3,1,"","overlap"],[0,3,1,"","perpendicular_axis"],[0,3,1,"","poly_poly_helper"],[0,3,1,"","polygon_polygon_test"],[0,3,1,"","project_verts"]],"rubato.classes.components.image":[[0,2,1,"","Image"]],"rubato.classes.components.image.Image":[[0,3,1,"","__init__"],[0,4,1,"","aa"],[0,3,1,"","cam_update"],[0,3,1,"","clone"],[0,3,1,"","delete"],[0,3,1,"","draw"],[0,3,1,"","draw_line"],[0,3,1,"","draw_point"],[0,4,1,"","flipx"],[0,4,1,"","flipy"],[0,3,1,"","get_size"],[0,3,1,"","get_size_original"],[0,5,1,"","image"],[0,3,1,"","resize"],[0,5,1,"","rotation"],[0,5,1,"","scale"],[0,4,1,"","visible"]],"rubato.classes.components.rigidbody":[[0,2,1,"","RigidBody"]],"rubato.classes.components.rigidbody.RigidBody":[[0,3,1,"","__init__"],[0,3,1,"","add_cont_force"],[0,3,1,"","add_force"],[0,4,1,"","bounciness"],[0,3,1,"","clone"],[0,3,1,"","fixed_update"],[0,4,1,"","friction"],[0,4,1,"","gravity"],[0,3,1,"","handle_collision"],[0,4,1,"","inv_mass"],[0,5,1,"","mass"],[0,4,1,"","max_speed"],[0,4,1,"","min_speed"],[0,3,1,"","physics"],[0,4,1,"","static"],[0,4,1,"","velocity"]],"rubato.classes.components.spritesheet":[[0,2,1,"","Spritesheet"]],"rubato.classes.components.spritesheet.Spritesheet":[[0,3,1,"","__init__"],[0,5,1,"","end"],[0,3,1,"","from_folder"],[0,3,1,"","get"],[0,5,1,"","grid_size"],[0,5,1,"","sheet"],[0,5,1,"","sprite_size"],[0,5,1,"","sprites"]],"rubato.classes.components.text":[[0,2,1,"","Text"]],"rubato.classes.components.text.Text":[[0,3,1,"","__init__"],[0,3,1,"","add_style"],[0,5,1,"","align"],[0,3,1,"","clone"],[0,3,1,"","delete"],[0,3,1,"","draw"],[0,5,1,"","font_color"],[0,5,1,"","font_size"],[0,3,1,"","generate_surface"],[0,5,1,"","justify"],[0,3,1,"","remove_style"],[0,5,1,"","text"],[0,5,1,"","width"]],"rubato.classes.game_object":[[0,2,1,"","GameObject"]],"rubato.classes.game_object.GameObject":[[0,3,1,"","__init__"],[0,3,1,"","add"],[0,4,1,"","components"],[0,3,1,"","delete"],[0,3,1,"","get"],[0,3,1,"","get_all"],[0,3,1,"","map_coord"],[0,4,1,"","name"],[0,4,1,"","pos"],[0,5,1,"","relative_pos"],[0,3,1,"","remove"],[0,3,1,"","remove_all"],[0,3,1,"","scale_value"],[0,4,1,"","z_index"]],"rubato.classes.group":[[0,2,1,"","Group"]],"rubato.classes.group.Group":[[0,3,1,"","__init__"],[0,3,1,"","add"],[0,3,1,"","add_game_obj"],[0,3,1,"","add_group"],[0,3,1,"","add_ui_element"],[0,3,1,"","count"],[0,3,1,"","delete"],[0,3,1,"","fixed_update"]],"rubato.classes.scene":[[0,2,1,"","Scene"]],"rubato.classes.scene.Scene":[[0,3,1,"","__init__"],[0,3,1,"","add"],[0,4,1,"","camera"],[0,3,1,"","delete"],[0,3,1,"","draw"],[0,3,1,"","fixed_update"],[0,4,1,"","id"],[0,3,1,"","paused_update"],[0,4,1,"","root"],[0,3,1,"","setup"],[0,3,1,"","update"]],"rubato.classes.scene_manager":[[0,2,1,"","SceneManager"]],"rubato.classes.scene_manager.SceneManager":[[0,3,1,"","__init__"],[0,4,1,"","_current"],[0,3,1,"","add"],[0,5,1,"","current"],[0,3,1,"","draw"],[0,3,1,"","fixed_update"],[0,3,1,"","is_empty"],[0,3,1,"","paused_update"],[0,4,1,"","scenes"],[0,3,1,"","set"],[0,3,1,"","setup"],[0,3,1,"","update"]],"rubato.classes.ui":[[0,2,1,"","UIElement"]],"rubato.classes.ui.UIElement":[[0,3,1,"","__init__"],[0,4,1,"","components"],[0,3,1,"","map_coord"],[0,4,1,"","name"],[0,4,1,"","pos"],[0,5,1,"","relative_pos"],[0,3,1,"","scale_value"],[0,5,1,"","z_index"]],"rubato.game":[[0,2,1,"","Game"],[0,2,1,"","GameProperties"]],"rubato.game.Game":[[0,4,1,"","background_color"],[0,4,1,"","border_color"],[0,3,1,"","constant_loop"],[0,4,1,"","debug"],[0,4,1,"","name"],[0,4,1,"","scenes"],[0,3,1,"","update"]],"rubato.game.GameProperties":[[0,5,1,"","camera"],[0,5,1,"","state"]],"rubato.utils":[[0,1,0,"-","color"],[0,1,0,"-","display"],[0,1,0,"-","error"],[0,1,0,"-","font"],[0,1,0,"-","input"],[0,1,0,"-","math"],[0,1,0,"-","radio"],[0,1,0,"-","sound"],[0,1,0,"-","time"],[0,1,0,"-","vector"]],"rubato.utils.color":[[0,2,1,"","Color"]],"rubato.utils.color.Color":[[0,3,1,"","__init__"],[0,4,1,"","a"],[0,4,1,"","b"],[0,5,1,"","black"],[0,5,1,"","blue"],[0,5,1,"","clear"],[0,5,1,"","cyan"],[0,3,1,"","darker"],[0,5,1,"","darkgray"],[0,3,1,"","from_hex"],[0,3,1,"","from_hsv"],[0,3,1,"","from_rgba32"],[0,4,1,"","g"],[0,5,1,"","gray"],[0,5,1,"","green"],[0,3,1,"","lighter"],[0,5,1,"","lightgray"],[0,5,1,"","lime"],[0,5,1,"","magenta"],[0,3,1,"","mix"],[0,5,1,"","night"],[0,5,1,"","orange"],[0,5,1,"","purple"],[0,4,1,"","r"],[0,5,1,"","random"],[0,5,1,"","red"],[0,5,1,"","rgba32"],[0,5,1,"","scarlet"],[0,5,1,"","snow"],[0,3,1,"","to_hex"],[0,3,1,"","to_tuple"],[0,5,1,"","turquoize"],[0,5,1,"","violet"],[0,5,1,"","white"],[0,5,1,"","yellow"]],"rubato.utils.display":[[0,2,1,"","Display"],[0,2,1,"","DisplayProperties"]],"rubato.utils.display.Display":[[0,5,1,"","bottom"],[0,5,1,"","bottom_center"],[0,5,1,"","bottom_left"],[0,5,1,"","bottom_right"],[0,5,1,"","center"],[0,5,1,"","center_left"],[0,5,1,"","center_right"],[0,3,1,"","clone_surface"],[0,3,1,"","draw_line"],[0,3,1,"","draw_point"],[0,3,1,"","draw_text"],[0,4,1,"","format"],[0,5,1,"","left"],[0,4,1,"","renderer"],[0,5,1,"","right"],[0,3,1,"","set_window_icon"],[0,5,1,"","top"],[0,5,1,"","top_center"],[0,5,1,"","top_left"],[0,5,1,"","top_right"],[0,3,1,"","update"],[0,4,1,"","window"]],"rubato.utils.display.DisplayProperties":[[0,5,1,"","display_ratio"],[0,5,1,"","res"],[0,5,1,"","window_pos"],[0,5,1,"","window_size"]],"rubato.utils.error":[[0,6,1,"","ComponentNotAllowed"],[0,6,1,"","DuplicateComponentError"],[0,6,1,"","Error"],[0,6,1,"","IdError"],[0,6,1,"","SideError"]],"rubato.utils.font":[[0,2,1,"","Font"]],"rubato.utils.font.Font":[[0,3,1,"","__init__"],[0,3,1,"","add_style"],[0,3,1,"","apply_styles"],[0,5,1,"","color"],[0,3,1,"","generate_surface"],[0,3,1,"","remove_style"],[0,5,1,"","size"]],"rubato.utils.input":[[0,2,1,"","Input"]],"rubato.utils.input.Input":[[0,3,1,"","get_keyboard_state"],[0,3,1,"","get_mouse_pos"],[0,3,1,"","get_name"],[0,3,1,"","key_from_name"],[0,3,1,"","key_pressed"],[0,3,1,"","mods_from_code"],[0,3,1,"","mouse_in"],[0,3,1,"","mouse_is_pressed"],[0,3,1,"","mouse_is_visible"],[0,3,1,"","scancode_from_name"],[0,3,1,"","set_mouse_visibility"],[0,3,1,"","window_focused"]],"rubato.utils.math":[[0,2,1,"","Math"]],"rubato.utils.math.Math":[[0,4,1,"","INF"],[0,3,1,"","clamp"],[0,3,1,"","lerp"],[0,3,1,"","sign"]],"rubato.utils.radio":[[0,2,1,"","Listener"],[0,2,1,"","Radio"]],"rubato.utils.radio.Listener":[[0,3,1,"","__init__"],[0,4,1,"","callback"],[0,4,1,"","event"],[0,3,1,"","ping"],[0,4,1,"","registered"],[0,3,1,"","remove"]],"rubato.utils.radio.Radio":[[0,3,1,"","broadcast"],[0,3,1,"","listen"],[0,4,1,"","listeners"],[0,3,1,"","register"]],"rubato.utils.sound":[[0,2,1,"","Sound"]],"rubato.utils.sound.Sound":[[0,3,1,"","__init__"],[0,3,1,"","get_sound"],[0,3,1,"","import_sound_folder"],[0,4,1,"","loaded_sounds"],[0,3,1,"","pause"],[0,3,1,"","play"],[0,3,1,"","resume"],[0,5,1,"","state"],[0,3,1,"","stop"]],"rubato.utils.time":[[0,2,1,"","Time"],[0,2,1,"","TimeProperties"]],"rubato.utils.time.Time":[[0,3,1,"","delayed_call"],[0,3,1,"","delayed_frames"],[0,4,1,"","delta_time"],[0,4,1,"","fixed_delta"],[0,4,1,"","fps"],[0,4,1,"","frames"],[0,3,1,"","milli_to_sec"],[0,4,1,"","physics_fps"],[0,3,1,"","process_calls"],[0,3,1,"","sec_to_milli"],[0,4,1,"","target_fps"]],"rubato.utils.time.TimeProperties":[[0,5,1,"","now"],[0,5,1,"","smooth_fps"]],"rubato.utils.vector":[[0,2,1,"","Vector"]],"rubato.utils.vector.Vector":[[0,3,1,"","__init__"],[0,3,1,"","abs"],[0,5,1,"","angle"],[0,3,1,"","ceil"],[0,3,1,"","clamp"],[0,3,1,"","clone"],[0,3,1,"","cross"],[0,3,1,"","dir_to"],[0,3,1,"","dot"],[0,5,1,"","down"],[0,3,1,"","floor"],[0,3,1,"","from_radial"],[0,5,1,"","infinity"],[0,3,1,"","is_vectorlike"],[0,5,1,"","left"],[0,3,1,"","lerp"],[0,5,1,"","mag_squared"],[0,5,1,"","magnitude"],[0,5,1,"","one"],[0,5,1,"","right"],[0,3,1,"","round"],[0,3,1,"","to_int"],[0,3,1,"","to_tuple"],[0,3,1,"","transform"],[0,3,1,"","translate"],[0,3,1,"","tuple_int"],[0,3,1,"","unit"],[0,5,1,"","up"],[0,4,1,"","x"],[0,4,1,"","y"],[0,5,1,"","zero"]],rubato:[[0,0,1,"","begin"],[0,1,0,"-","game"],[0,0,1,"","init"]]},objnames:{"0":["py","function","Python function"],"1":["py","module","Python module"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","property","Python property"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:function","1":"py:module","2":"py:class","3":"py:method","4":"py:attribute","5":"py:property","6":"py:exception"},terms:{"0":[0,1,5,9,12],"00":5,"000":5,"1":[0,1,2,5,8,9],"10":[1,4,6,11],"100":[0,1,8],"1000":0,"108":1,"1080":[1,11],"1080p":0,"110":1,"112":1,"114":1,"116":1,"117":1,"118":1,"128x128":0,"132":1,"147":1,"148":1,"155":1,"16":1,"162":1,"178":1,"184":1,"185":1,"190":1,"1920":11,"195":1,"196":1,"2":[0,5,9,11,12],"20":[0,1,8],"201":1,"203":1,"206":1,"214":1,"22":1,"223":1,"225":1,"227":1,"230":1,"231":1,"232":1,"233":1,"239":1,"24":1,"25":1,"253":1,"254":1,"255":[0,1],"2d":[0,8],"3":[0,2,4,5,6,11],"32":1,"360":1,"4":[5,12],"45":1,"48":1,"49":1,"5":[0,1,5],"50":12,"52":1,"54":1,"540":11,"6":5,"60":[0,1],"67":1,"7":5,"720p":0,"8":5,"85":1,"9":[1,5],"92":1,"960":11,"99":1,"boolean":0,"break":5,"case":5,"char":0,"class":[0,11],"default":[0,4,9,11],"do":[0,4,8],"final":[0,10],"float":[0,1],"function":[0,1,2,4,8,9,11,12],"import":[0,4,8,9,11],"int":[0,1,2],"new":[0,4,9,11],"return":[0,5,9],"static":[0,1],"switch":[0,12],"true":[0,1],"try":0,"while":0,A:[0,1,11],And:0,As:8,At:[11,12],By:[0,12],For:[0,8,11,12],If:[0,4,9],In:[0,6,9,11,12],Is:0,It:[0,4,11,12],No:[0,2],One:0,That:8,The:[0,1,2,8,9,11,12],Their:12,Then:[0,12],There:[2,11],These:[0,2,5],To:[0,4,8,11],Will:[0,1],__init__:0,_current:0,aa:0,ab:0,abl:0,about:[0,12],abov:11,absolut:0,ac:5,acceler:0,access:[0,11],accord:0,accur:0,action:12,activ:0,actual:[0,1,11],ad:[0,4,10],add:[0,4,11,12],add_cont_forc:0,add_fold:0,add_forc:0,add_game_obj:0,add_group:0,add_spritesheet:0,add_styl:0,add_ui_el:0,addit:2,advanc:6,after:[0,2,4,12],again:5,algebra:11,algorithm:0,alias:[0,1],align:[0,1],all:[0,1,2,5,11],allow:[0,11],along:[0,1],alpha:0,alphabet:0,alreadi:[0,2,4],also:[0,1,2,4,12],alt:5,alteras:5,altgr:5,alwai:0,amount:[0,1],an:[0,1,2,4,8,9,11,12],angl:0,ani:[0,5,11],anim_fram:0,anim_tick:0,animation_default:1,animation_frames_left:0,anoth:0,anti:[0,1],anti_alias:1,anticlockwis:0,anyth:[11,12],anywher:0,api:4,appear:[1,11],appl:5,appli:[0,1,11],applic:0,apply_styl:0,ar:[0,1,2,5,11,12],arbitrari:0,argument:[0,4],around:[0,1],arrai:9,arrow:5,as400:5,aspect:6,associ:0,assum:[4,9],attach:0,attribut:0,audiomut:5,audionext:5,audioplai:5,audioprev:5,audiostop:5,automat:[0,1],avail:[0,5,8,9,11,12],averag:0,axi:[0,1],b:[0,5],back:[0,5],backend:0,background:[0,1,4,11,12],background_color:[0,1,11],backspac:5,base:0,basic:[0,10],becaus:12,been:0,befor:[0,2,12],begin:[0,4,11,12],beginn:0,being:0,below:[0,2],beoverridden:0,better:0,between:[0,8,12],binari:5,black:[0,1],blank:[0,4],blend:0,blue:[0,1],bold:[0,1],bookmark:5,bool:[0,1],border:[0,1],border_color:[0,1],both:0,bottom:[0,1,4],bottom_cent:0,bottom_left:0,bottom_right:0,bounci:[0,1],bound:0,bounding_box_dimens:0,box:0,brew:4,brightnessdown:5,brightnessup:5,broadcast:[0,2],build:[6,12],built:[0,6,8],builtin:[1,11],button1:0,button2:0,button3:0,button4:0,button5:0,button:0,c:[4,5],calcul:[0,5],call:[0,1,4,11,12],callabl:[0,1],callback:0,cam_upd:0,camera:12,can:[0,1,2,4,11],cancel:5,cannot:0,cap:[0,5],capslock:5,caught:0,ccw:1,ceil:0,center:[0,1,12],center_left:[0,12],center_right:0,certain:0,chang:[0,2,9,11,12],channel:0,charact:[2,12],check:[0,4],choic:11,circl:0,circle_a:0,circle_b:0,circle_circle_test:0,circle_default:1,circle_polygon_test:0,clamp:0,classmethod:0,clear:[0,5],clearentri:5,clockwis:0,clone:0,clone_surfac:0,code:[0,2,4,8,9,11,12],coeffici:0,col:0,colinfo:[0,1],collect:[0,12],collid:[0,12],collis:[0,1],color:[4,9,11],color_default:[1,9],colorwheel:1,column:1,come:[0,9,11],comfortaa:1,command:5,common:1,commonli:0,commun:[0,11],comp_typ:0,compartment:[0,12],complet:0,compon:[1,12],componentnotallow:0,compos:5,compris:0,comput:[5,11],config:0,congrat:4,constant:0,constant_loop:0,contain:[0,1,11],context:5,continu:0,control:0,convert:0,coord:0,coordin:[0,8],coorespond:0,coorspond:0,copi:[0,5],corner:0,correspond:0,could:[0,12],count:0,counterclockwis:0,creat:[0,4,10,11],cross:0,crsel:5,ctrl:5,currencysubunit:5,currencyunit:5,current:[0,2,9,12],current_fram:0,current_st:0,custom:[0,4,11],cut:5,cwd:1,cyan:[0,1,11,12],cycl:4,d:[0,5],darker:0,darkgrai:[0,1],data:2,debug:[0,1],decim:[0,1,5],decimal_plac:0,decimalsepar:5,def:[2,9],default_st:0,defin:[0,2],degre:0,delai:0,delayed_cal:0,delayed_fram:0,delet:[0,5],delta_tim:0,demo:[9,11],depend:4,describ:[0,4],descriptor:0,despit:0,detect:0,determin:0,develop:[0,8],dict:0,dictionari:[0,1,2,4],differ:[0,8,12],dim:0,dimens:[0,11],dir_to:0,direct:[0,4],directli:0,directori:0,displai:[1,8,9,12],display_ratio:0,displayproperti:0,displayswitch:5,distanc:0,divid:8,dll:4,document:4,doe:0,don:[0,4,12],dot:0,down:[0,2,5,11],draw:[0,1,8,9,12],draw_lin:0,draw_on:9,draw_point:[0,9],draw_text:0,drawn:0,duplic:0,duplicate_nam:0,duplicatecomponenterror:0,durat:0,dure:[0,4],e:[0,5],each:[0,1,2,12],easi:[0,4,6],easier:0,easili:[0,12],eaz:5,ed:0,either:0,eject:5,elaps:0,els:[0,11],empti:[0,2],enabl:[0,1],end:[0,4,5],enemi:10,engin:[0,4],enter:5,entir:[0,11],equat:0,eras:5,error:[1,4],escap:5,etc:[4,11],event:[0,5],event_nam:2,everi:[0,6,11,12],everyth:0,exactli:4,exampl:[2,4,12],except:0,execut:5,exit:2,expect:0,experienc:1,explain:12,exsel:5,ext:9,f10:5,f11:5,f12:5,f13:5,f14:5,f15:5,f16:5,f17:5,f18:5,f19:5,f1:5,f20:5,f21:5,f22:5,f23:5,f24:5,f2:5,f3:5,f4:5,f5:5,f6:5,f7:5,f8:5,f9:5,f:5,factor:[0,1],fals:[0,1],faster:0,featur:[6,8],few:11,ffffffff:0,file:[0,4,8,11],filenam:0,filesystem:[0,12],fill:1,find:[0,5],finish:9,fire:2,first:[0,11,12],fit:0,fix:0,fixed_delta:0,fixed_upd:0,flip:[0,1],flipi:[0,1],flipx:[0,1],floor:0,focu:0,focus:0,folder:[0,11],follow:[0,2,4],font_color:0,font_default:1,font_siz:0,forc:0,forev:0,format:[0,11],forward:[0,5],found:0,foundat:11,fp:[0,1],frame:0,frames_delta:0,fredoka:1,free:0,freez:0,friction:[0,1],from:[0,1,4,8,11,12],from_coord:0,from_fold:0,from_hex:0,from_hsv:0,from_radi:0,from_rgba32:0,full:[4,11],fulli:0,func:0,fundament:0,further:[0,12],futur:[0,9],g:[0,5],game:[4,11,12],game_default:1,gameobj:0,gameobj_default:1,gameobject:[0,12],gameproperti:0,gener:[0,8],generate_polygon:0,generate_surfac:0,get:[0,8,9,11,12],get_al:0,get_keyboard_st:0,get_mouse_po:0,get_nam:[0,2],get_siz:0,get_size_origin:0,get_sound:0,getter:0,give:[0,2,11,12],given:[0,2],global:0,go:[0,1,4,11],grai:[0,1],graviti:[0,1],grayscal:0,grayscale_default:1,greater:1,green:[0,1],grid:[0,1],grid_siz:[0,1],group:12,group_default:1,gui:5,h:[0,5],ha:[0,8,11,12],half:0,handl:[0,10,11],handle_collis:0,happen:[0,1,11],hardwar:11,have:[0,4,11,12],height:[0,1,2],held:2,help:[0,5,11,12],helper:0,here:[0,1,2,4,5,8,9,11,12],hex:0,hexadecim:[0,5],hide:0,high:0,higher:8,him:11,hitbox_default:1,hold:[0,12],home:5,homebrew:4,hopefulli:9,hous:0,how:[0,2,4,6,8,9,12],howev:8,hsv:[0,11],http:1,hue:0,i:[0,5],icon:[0,1],id:0,ident:1,identifi:[0,1,5],iderror:0,idl:0,ie:0,ignor:1,illumin:5,imag:[9,12],image_default:1,implement:[0,9],import_sound_fold:0,impuls:0,includ:[0,1],inclus:0,increas:11,index:[0,12],indexerror:0,inf:[0,1],infin:0,infinit:[0,1],info:0,inform:[0,2],init:[0,4,11],initi:[0,1,2,4,11,12],input:[2,10],insert:5,insid:0,instal:[8,9,11],instanc:0,instead:0,inter:0,interact:4,interest:11,intern:0,interpol:0,intric:0,introduc:11,inv_mass:0,invalid:0,invers:0,is_empti:0,is_vectorlik:0,issu:11,ital:[0,1],item:[0,12],iter:0,its:[0,11],itself:0,j:5,jump:4,just:[0,1,2,4,9,11],justif:[0,1],justifi:[0,1],k:5,kbdillumdown:5,kbdillumtoggl:5,kbdillumup:5,kei:0,key_from_nam:0,key_press:0,keyboard:[0,5],keycod:[0,2],keydown:2,keyerror:0,keyhold:2,keypress:0,keyup:2,kinemat:0,know:[0,4,8],l:5,label:0,lai:11,lambda:1,larg:0,last:0,later:0,law:0,lead:0,left:[0,1,5,12],legibl:0,length:0,lerp:0,less:0,let:[0,11,12],level:[0,6,10,12],lib:4,librari:[8,11],lighter:[0,11],lightgrai:[0,1],like:11,lime:[0,1],line:[0,4],linear:[0,11],linearli:0,linux:4,list:[0,1,2,5,9,11],listen:[0,2],littl:[0,11,12],ll:4,load:[0,11],loaded_sound:0,lock:5,log:4,logic:11,look:[0,11],loop:[0,11],lot:11,lower:0,lowercas:0,m:5,mac:4,mag_squar:0,magenta:[0,1],magnitud:0,mai:0,mail:5,main:[0,11,12],make:[0,11,12],manag:[11,12],mani:[0,11],manifold:0,manipul:11,map:0,map_coord:0,mass:[0,1],match:0,math:[1,11],matter:0,max:0,max_spe:[0,1],maximum:[0,1],mean:[0,1],mediaselect:5,memadd:5,memclear:5,memdivid:5,memmultipli:5,memrecal:5,memstor:5,memsubtract:5,menu:5,merriweath:1,messag:[0,1],meta:5,metaclass:0,method:0,might:0,milli:0,milli_to_sec:0,millisecond:0,min:0,min_spe:0,minimum:0,misbehav:0,mix:0,mod:[0,2],mode:0,modern:0,modeswitch:5,modifi:[0,2],mods_from_cod:[0,2],modul:0,momentum:0,monitor:0,more:[0,4,8,11],mous:0,mouse_in:0,mouse_is_press:0,mouse_is_vis:0,move:[0,8],much:0,multi:0,multipl:0,multipli:0,must:[0,1],mutat:7,mute:5,n:[0,5],name:[0,1,2,11,12],ndarrai:9,nearli:[6,11],necessari:4,need:[0,4,8,9,11,12],neg:0,never:0,new_siz:0,new_stat:0,newli:0,next:[11,12],night:[0,1],nois:7,noise2:8,none:[0,1],normal:[0,1],note:[5,11],noth:[0,11,12],now:[0,4,11,12],num_sid:0,number:0,numlock:5,numpi:9,o:5,object:[4,12],occur:0,octal:5,offici:4,offset:[0,1,8],ok:12,old_height:2,old_width:2,on_collid:[0,1],onc:[0,4],one:[0,6],ones:0,onli:[0,4],onto:0,opensimplex:8,oper:5,option:[0,4],orang:[0,1],order:8,org:[1,4],origin:0,other:[0,12],otherwis:0,our:[4,11,12],out:[0,5],outlin:[0,1],output:0,over:0,overlap:0,overridden:0,overriden:0,own:2,p1:0,p2:0,p:5,page:4,pagedown:5,pageup:5,pan:0,param:0,paramet:[0,1,4,5,11],parent:0,part:[0,11,12],pass:[0,4,5,11],past:[0,5],path:[0,1],paus:[0,5],paused_upd:0,percent:1,period:0,perlin:7,perpendicular:0,perpendicular_axi:0,physic:[0,1,12],physics_fp:[0,1],ping:0,pip:[4,8,9,11],pixel:[0,1,7],pixel_access:9,pixelaccess:9,pixelformat:0,pixels2d:9,place:[0,1],placement:0,plai:0,platform:[4,6,11,12],player:[10,11],plu:1,png:1,po:[0,1,12],point:[0,8,11,12],pointer:0,poly_a:0,poly_b:0,poly_poly_help:0,polygon:0,polygon_default:1,polygon_polygon_test:0,pos_correct:1,posit:[0,1,12],possibl:[0,4],postion:0,potenti:0,powerus:0,preload:11,prepackag:0,press:[0,2,5],pressstart:1,previou:11,print:2,printscreen:5,prior:5,prioriti:0,process:[0,2,4],process_cal:0,product:0,program:[2,11],project:[0,4,11],project_vert:0,properti:0,purpl:[0,1],purpos:[0,12],py:[4,11],pysdl2:0,pysdl:4,python3:4,python:[0,4,6,8,11],q:5,quick:6,r:[0,5],radian:0,radio:2,radiu:[0,1],rais:0,random:[0,8,9],rang:[0,8,9],ratio:0,rb:[0,1,2,4,8,11,12],re:[0,1,4,8,11],reach:0,read:0,readi:[4,11],readonli:0,real_vert:0,recommend:[0,4,8],rectangl:0,rectangle_default:1,red:[0,1],refer:[0,9,12],referenc:2,refresh:5,region:8,regist:0,reinstal:4,rel:[0,1],rel_path:[0,1],relat:0,relative_po:0,releas:2,remov:0,remove_al:0,remove_styl:0,render:[0,8,11],replac:11,repres:[0,1,11],represent:0,requir:[0,4],reset:0,resiz:[0,2],resolut:[0,1,4,8,11],resolv:0,result:0,resum:0,rgb:[0,1],rgba32:[0,9],rgba:[0,11],rgv_color_wheel_1908:1,right:[0,1,2,5,12],rigidbody_default:1,roboto:1,robust:0,root:0,rotat:[0,1],round:0,row:1,rrggbbaa:0,rtype:0,rubato:[0,2,4,5,8,9,11,12],rudimentari:12,run:[0,1,4,11],runtimeerror:0,s:[0,1,4,5,11,12],same:0,sat:0,satur:0,save:0,scalar:0,scale:[0,1,8],scale_valu:0,scancod:0,scancode_from_nam:0,scarlet:[0,1],scene:[4,12],scene_id:0,screen:[0,9,12],scrolllock:5,sdl2:[0,4,9],sdl2_gfx:4,sdl2_imag:4,sdl2_mixer:4,sdl2_ttf:4,sdl:[0,4],sdl_surfac:[0,9],search:[0,5],sec:0,sec_to_milli:0,second:[0,12],see:[0,2,4,11,12],select:5,self:0,sensit:5,sep:0,separ:[0,5],seper:0,seri:0,set:[0,1,11,12],set_current_st:0,set_mouse_vis:0,set_window_icon:0,setter:0,setup:0,shade:11,shape:[0,9],shape_a:0,shape_b:0,sheet:0,shift:[0,1,5],shortcut:0,should:[0,1,4,11,12],show:[0,6,9],shuffl:9,side:[0,12],sideerror:0,sign:[0,1],similar:0,simpl:[4,12],simplex:8,simpli:[0,4],simplist:0,simul:0,sinc:0,singl:0,singular:0,size:[0,1,4,11],sleep:5,small:0,smallest:0,smooth:0,smooth_fp:0,smoothli:8,snow:[0,1],so:0,sole:0,some:[0,2],someth:[0,4,12],sound:10,sound_nam:0,sourc:[0,8,9,11,12],sourcecodepro:1,space:[0,5],specif:[0,4,9],specifi:[0,4],speed:[0,1],sprite:[0,1],sprite_s:[0,1],spritesheet_default:1,squar:[0,4],start:[0,1,9,11,12],startin:1,state:0,state_nam:0,step:[0,11,12],still:0,stop:[0,5],store:[0,11],str:[0,1,2],straight:4,streamlin:0,strikethrough:[0,1],string:[0,2],structur:[10,12],style:[0,1],subclass:0,subscript:0,subtract:0,success:0,successfulli:11,superclass:0,sure:11,surf:9,surfac:[0,9],surround:0,sysreq:5,system:0,t:[0,4,5,12],tab:5,tag:[0,1],take:[0,1,9],tall:0,target:[0,1],target_fp:[0,1],task:0,templat:0,tend:0,term:0,termin:[4,8],text_default:[0,1],textur:0,than:[0,1],thei:[0,4,12],them:[0,11],themselv:[0,12],thi:[0,1,2,4,6,9,11,12],thing:[0,4,12],thousandssepar:5,through:[0,12],throughout:[0,4],tick:0,time_delta:0,timeproperti:0,titl:[0,1],to_coord:0,to_hex:0,to_int:0,to_tupl:0,togeth:0,toggl:[0,5],too:0,top:[0,1,11],top_cent:0,top_left:0,top_right:0,total:0,touch:10,transform:0,transformed_radiu:0,transformed_vert:0,translat:0,transpar:0,travel:0,trigger:[0,1],tupl:[0,1,11],tuple_int:0,turn:0,turquoiz:[0,1],tutori:[0,12],two:0,tx:0,type:[0,4,11],u:5,ui_default:1,uielement:0,underlin:[0,1],understand:12,undo:5,unexpect:0,unicod:2,union:0,uniontyp:0,unit:0,unless:0,untitl:1,up:[0,5,11],updat:0,upload:1,upper:0,us:[0,1,2,4,5,6,7,11,12],useless:0,user:0,usual:0,v2:6,v:[0,5],valu:[0,1,2,4,8,9],valueerror:0,variabl:[0,8,11],variou:0,ve:4,vector:[1,8,11,12],vector_lik:0,veloc:[0,1],veri:[0,12],vert:[0,1],vertex:0,vertic:[0,1],violet:[0,1],virtual:0,visibl:[0,1],visual:8,volumedown:5,volumeup:5,w:[0,5],wa:[0,6],wai:0,wait:0,walk:12,warn:0,wasn:0,we:[0,4,6,8,9,11,12],welcom:[11,12],went:4,were:0,what:[0,4,11],when:[0,1,2,4],where:0,whether:[0,1],which:[0,8,9,12],white:[0,1,4,11],width:[0,1,2],wikimedia:1,wikipedia:1,window:[0,1,4,5,11,12],window_focus:0,window_po:0,window_s:[0,1,11],wish:0,without:[2,4,11],won:[0,4,12],wont:0,work:[4,6],would:[0,12],wrap:[0,1],wrong:[0,4],www:5,x:[0,1,4,5,6,8,9,11],xor:5,y:[0,1,5,8,9,11],yellow:[0,1],you:[0,2,4,6,9,11,12],your:[0,2,4,8,9,11,12],your_filenam:4,z:[0,5,12],z_index:[0,1],zero:[0,1],zoom:[0,2,8]},titles:["Full API Documentation","Default Options","Event Details","&lt;no title&gt;","Getting Started","Key Names","Learning Rubato","Advanced Features","Using Perlin Noise","Using Pixel Mutation","Making a Platformer","Basic Structure","Creating a Player","Handling Input","Creating a Level","Adding Enemies","Adding Sound","Final Touches"],titleterms:{"default":1,"final":17,"function":5,Their:0,ad:[15,16],advanc:7,anim:[0,1],api:0,applic:5,basic:11,camera:[0,2],charact:5,circl:1,color:[0,1],common:5,compon:0,control:5,creat:[12,14],detail:2,displai:0,document:0,element:[0,1],enemi:15,error:0,event:2,exampl:0,featur:7,font:[0,1],full:0,game:[0,1],get:4,grayscal:1,group:[0,1],handl:13,hardwar:0,hitbox:[0,1],imag:[0,1],input:[0,13],instal:4,interact:0,kei:[2,5],keypad:5,learn:6,letter:5,level:14,make:10,manag:0,math:0,modifi:5,mutat:9,name:5,nois:8,number:5,numer:5,object:[0,1],option:1,other:5,perlin:8,pixel:9,platform:10,player:12,polygon:1,radio:0,rectangl:1,rigidbodi:[0,1],rubato:6,scene:0,scenemanag:0,set:4,sound:[0,16],special:5,spritesheet:[0,1],start:4,structur:11,system:2,text:[0,1],time:0,touch:17,tutori:6,ui:[0,1],uncommon:5,up:4,us:[8,9],util:0,vector:0,window:2}})