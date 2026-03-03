// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: lampung-skina.ggsk
// Generated 2026-03-03T10:12:52

function pano2vrSkin(player,base) {
	player.addVariable('v_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('PantaiMinangRoa', 0, "", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "" } });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('teaser_shown', 2, false, { ignoreInState: 0  });
	player.addVariable('teaser_krakatau_seen', 1, 0, { ignoreInState: 0  });
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('persetujuan_audio', 1, 0, { ignoreInState: 0  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('var_compass', 2, false, { ignoreInState: 1  });
	player.addVariable('node_total', 1, 0, { ignoreInState: 0  });
	player.addVariable('visited_nodes', 1, 0, { ignoreInState: 0  });
	player.addVariable('percentage_visited', 1, 0, { ignoreInState: 0  });
	player.addVariable('width_progressbar', 1, 0, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_image_popup') == false)) && 
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_video_youtube_popup') == false)) && 
				((player.getVariableValue('vis_video_vimeo_popup') == false)) && 
				((player.getVariableValue('vis_video_file_popup') == false)) && 
				((player.getVariableValue('vis_video_url_popup') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_map') == false)) && 
				((player.getVariableValue('vis_phone_floorplan') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		el=me._rectangle_3_1=document.createElement('div');
		el.ggId="Rectangle 3_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 15%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0));';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_3_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_3_1);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0%;';
		hs+='height : 24.6296%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6));';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_3);
		el=me._headerright=document.createElement('div');
		el.ggId="header-right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container menu-scale lang-active-res";
		el.ggType='container';
		hs ='';
		hs+='height : 10.0926%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='top : 3.8%;';
		hs+='visibility : hidden;';
		hs+='width : 14.51%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._headerright.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._headerright.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._headerright.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._headerright.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._headerright.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._headerright.ggCurrentLogicStatePosition == 0) {
					me._headerright.style.right='5%';
					me._headerright.style.top='12%';
				}
				else {
					me._headerright.style.right='5%';
					me._headerright.style.top='3.8%';
				}
			}
		}
		me._headerright.logicBlock_position();
		me._headerright.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._headerright.ggCurrentLogicStateSize != newLogicStateSize) {
				me._headerright.ggCurrentLogicStateSize = newLogicStateSize;
				me._headerright.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._headerright.ggCurrentLogicStateSize == 0) {
					me._headerright.style.width='40%';
					me._headerright.style.height='10.09%';
					skin.updateSize(me._headerright);
				}
				else {
					me._headerright.style.width='14.51%';
					me._headerright.style.height='10.0926%';
					skin.updateSize(me._headerright);
				}
			}
		}
		me._headerright.logicBlock_size();
		me._headerright.ggUpdatePosition=function (useTransition) {
		}
		el=me._menulang=document.createElement('div');
		el.ggId="menu-lang";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menulang.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menulang.ggUpdatePosition=function (useTransition) {
		}
		el=me._nlflag=document.createElement('div');
		els=me._nlflag__img=document.createElement('img');
		els.className='ggskin ggskin_nlflag';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="nl-flag";
		el.ggDy=0.04;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='position : absolute;';
		hs+='right : 80.98%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0.04%);';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nlflag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nlflag.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nlflag.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nlflag.ggCurrentLogicStateSize = newLogicStateSize;
				me._nlflag.style.transition='width 0s, height 0s';
				if (me._nlflag.ggCurrentLogicStateSize == 0) {
					me._nlflag.style.width='30px';
					me._nlflag.style.height='30px';
					me._nlflag.style.top = 'calc(50% - (30px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._nlflag);
				}
				else {
					me._nlflag.style.width='46px';
					me._nlflag.style.height='46px';
					me._nlflag.style.top = 'calc(50% - (46px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._nlflag);
				}
			}
		}
		me._nlflag.logicBlock_size();
		me._nlflag.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 500ms ease-out 0ms';
			}
			me._menulang.style.opacity='0';
			me._menulang.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._nlactive.style.transition='none';
			} else {
				me._nlactive.style.transition='all 300ms ease 0ms';
			}
			me._nlactive.style.opacity='1';
			me._nlactive.style.visibility=me._nlactive.ggVisible?'inherit':'hidden';
			player.setLanguage("nl");
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease-out 0ms';
				}
				me._btndrone.style.opacity='1';
				me._btndrone.style.visibility=me._btndrone.ggVisible?'inherit':'hidden';
			}
		}
		me._nlflag.ggUpdatePosition=function (useTransition) {
		}
		me._menulang.appendChild(me._nlflag);
		el=me._arflag=document.createElement('div');
		els=me._arflag__img=document.createElement('img');
		els.className='ggskin ggskin_arflag';
		els.loading = 'lazy';
		hs=basePath + 'images/arflag.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ar-flag";
		el.ggDy=0.04;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='position : absolute;';
		hs+='right : 60.98%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0.04%);';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._arflag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._arflag.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._arflag.ggCurrentLogicStateSize != newLogicStateSize) {
				me._arflag.ggCurrentLogicStateSize = newLogicStateSize;
				me._arflag.style.transition='width 0s, height 0s';
				if (me._arflag.ggCurrentLogicStateSize == 0) {
					me._arflag.style.width='30px';
					me._arflag.style.height='30px';
					me._arflag.style.top = 'calc(50% - (30px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._arflag);
				}
				else {
					me._arflag.style.width='46px';
					me._arflag.style.height='46px';
					me._arflag.style.top = 'calc(50% - (46px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._arflag);
				}
			}
		}
		me._arflag.logicBlock_size();
		me._arflag.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 500ms ease-out 0ms';
			}
			me._menulang.style.opacity='0';
			me._menulang.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._aractive.style.transition='none';
			} else {
				me._aractive.style.transition='all 300ms ease 0ms';
			}
			me._aractive.style.opacity='1';
			me._aractive.style.visibility=me._aractive.ggVisible?'inherit':'hidden';
			player.setLanguage("ar");
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease-out 0ms';
				}
				me._btndrone.style.opacity='1';
				me._btndrone.style.visibility=me._btndrone.ggVisible?'inherit':'hidden';
			}
		}
		me._arflag.ggUpdatePosition=function (useTransition) {
		}
		me._menulang.appendChild(me._arflag);
		el=me._cnflag=document.createElement('div');
		els=me._cnflag__img=document.createElement('img');
		els.className='ggskin ggskin_cnflag';
		els.loading = 'lazy';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAABcRAAAXEQHKJvM/AAAMY0lEQVR4nN2ce3RV1Z3HP3ufc1+5ubnJzSXEOICYtA6uqhCenRiHWUsinVpax1oRGGCErsW0MiCIqw8LVek4Ym277ECNoKOWtqPOmEpdEanIOCy0MoA8tGtRCTOFBMyDvHNf57Hnj5uEJOR1b04g+v3rnn32/v1+93v3+e3f77f3uUIpxWgjfqoqHD12Ykbk4MESo/rc562WlnHxk38qAAqAQI+uNtAEnPfeeMM5mZnZ4J444bh/zqwDGbNnHtXD4fbRtlWMFiHt7+yf2bb37dtbKnbdo2KxzzkhU8vJ+UPwjgWvBspurciYXnzKCZl94SghZmOjvFC+Y0Xb7t8vM86d+yIgHRPeG4a78No3QkuXbM1ZdPceJw'+
			'U7QogdjcoL259b3LTzNw9ZTU2fd8Cu4UK5CgoO5CxbvDn33uVvOiFwRIRYzc2itXL3nXVbfrLZ7ui4zgmD0oRyTZr4Vt6GdZuybpv33kgEpU1Ix8H/mfzJxkeeT1SdvmUkBjgM2zftpl/9xdP/ukoPhSLpCEiLkPqnti5q+MUzT2OagaF7X34Ir/fsVZt/eHfwq19JebakRIgyDK169f2b2/fu2wBoqSq7rNC01vCqb943bu3qX6YybNiEGLV13prVa38e/eDYyrQMvDIws+/5xvqrHtn01HAHDIuQRHVN7tmVq36dqDo9DxAjsfAKwPYVT/vphO3bvqNlZZlDdR6SEKO2zntm2YrXElWnyxwz8QrAVzztx9e8tHPDUP0GDZyUYWg1q9f+vHNmfKoRPfLButrHtqwfqt+AM8SORkXN2g1b2vbuewBADPagqM7nSFy8'+
			'HlBhv8MVIo0nUQymqH/Y4QfuXxha9c1XBpQ5ECH1T21bWf/UtmcAAapfQrqahJ38LLXOFltdQoroFNBzSnbpVkohhOjuM1xotp0yjQqi4efKb86YW3qkv/v9EtJx8NCUPy9deRjT9HWJ+awQAiDzxp0c/9ors/Txea2X3OvbYDU3i/MbH9lxkYwrCKUADZSzC5tdV39d8z9v2dLfvUsIaa3cfWfiVNVfOWpBCrAAJQRS2QghsK8anfJE5HeV90b+a//Uvu29CLGjUVm35SebR8WCYUJ5dMRkAS4dEfaRtagDhe24HgGutvIdD/dt70XIhe3PLb7CWSsyrnD/jUn2Cy3kbK9FC1sojw+E86WVxKEjZfFDR6b30t/1wWxslE07f/OQU8rkOEk6Qa2GTexFDVuauAqieOdGyausxZpvoJTC0QqfZXmbH33siZ5N3YRcKN'+
			'+xwonijlIKW9fwL4+k5QstwFumcIU0iLqIvZtJ3Z058KZnpKb1i8SJj0o73tgzp+u6m5C23b9f5oQCZYOWb5Expx3pdYNKbaqbXonSLepX5lL7YC6qXiGaLTTbTGtpHgoC9EjFa0u7riUkC8KdNdARQ0oN/+0GrmAUT6mRDFJSgCtmY7ymoc4a2O8r2nYFUaJnpUEBejLWcQjx/e8uNKtr8qGTkLa9b9+OQwVhU3fjm9UE0sa/IIJSglR8SVc4LgAlbaw/GsgefkMpDXGTiZISpAAhsUbqcOPxnNjBQyXQSUJLxa57RibxIvTJEbyTOtCUiWtCMyos0i4YSCWTBoqLEa2SCt8ME/9dCpUt0eeBnaWP2O5Ixa6FADJ+qirs1L4JgPeGpP1C2XiCEbLmxUE4U1wTSJA6IgCB1fXkvNyEq9hAdow8Tkkc+WAugB49dmJG'+
			'KgNllgvXlARYVq/pLUjOhODdF5IhtwBshas4huv/XAhlgQDRY/rblsT6SMAQ5eCupVa/SRJc34H3L6MI6UZL6ET/3YVSDgRu0Vg4fvzDkB45eLAklXFGm8AdsBj3rXr0jBiCZGYnACEUIBFY3f0zZl7AP7MBoYuuvBmQJJr9NGwOoaIwaL2gp+7jiqalGQRWC/yLIhhNNu7749gbvPRQmTai+96ZrBvV51KKPTSVIL7XS/WHE8jb2Ejg2rrkjqxQSAFdlnV9RV2ZCAkKCUpgI4geDdH4UDZ2qwEM7WK6ltrkjLSxzkPzkzkk/lMg84CggPqRM2KdOZuvWy0t41IdqJSJ+ESjdl0OiaUeQnd+glSJIQaBYXtpfTaf1p0aLkyk6r41fAhF9JgL+xR4bAM+SdX6gWE3NgW0VUp+Fwj3o7n3Vd+fUSmkBdHDGrH/DeCeau'+
			'LyJXoP7xyk0Ik15tL4gzzib2po/VCQStAlLgiEsJEq7QWsl5ldUKZZKUkeSUhLkur0CNEDHppeCQ38SytB045MjMMq6XNGCpFeyXEomDXnciW9z2ekCUXWzR0DmiikRca8BLY9tncwBHgdiU71q2w8RR3d15bSsVQw6UgBsMma1oDKcCYeUYCYNPJgrB+MvMggULimJ8BtowDTctNcmc+f/z6f9j+EsfBgKx2pGfhKh9wnGgI2CguEIvxwHFuTKFJ0ykNAJ7lopk2MxEvglloEFkZrJg3bcunY50Wz4MLGEB23ZZB9XxMefwTPjTHMPV6S+xapPz6u8QJyBdokgZjSge8uPyJhYdcJEvuTX2GE2bAlSZ7pShsJXwLf9VHaj4aoWTWR6NtuNMtCYCNMg3ilm7p/HE/HySD+myOY2J2uOHXElI7rDoPM77ahCRP/P0Vw'+
			'zZbEq5x5fBRExR+Lrj8BfKHXDQV9FqQBtyEy7jKxo5J4pRtNdQZHl2xDCIQu8S2LETvgxT6p0FBpbUMoNIJbO3AVxxD1Gg13BdCj6a9cPTW6Z81YKr033nAubWlA9A0X8d9pCGuwSFGBaRP5Nw/yvNUdkKUFj0CMV7Ssycao1fHdmqzSOwHh88V0mZnZMBIhql11ZecMGiZ1JnZ2C3TG+sMQ3nePFPRcaF2TiToPHcf9WGFA2GgO1Fq1qwvapHvihOMjlpQChno0epSCkjTkuRDC1d1q1hjY1SbYFipiop0x0Wxntin0osJq6Z8z64Aj0hyC7XPD1Tq2cGFm6/gXtaFso/v+aNRVARQob8kXT+sZs2ceZYRLr5OQMRPf1xJ45iZweU2iR3VsoSOEDXbST40GISIQqHZ/rjAi9XC4XcvJOei4hnShBO3bfQjLQM+Lkn'+
			'FrhNCzLbj/bnR/L8/sGZXQOSuCdyx4dVS1pQCBwjfFRB9vYisd86SX9vIAsddHlxDf/LIK6CQkUHZrBWAMOuJywS1giqD5wWyaHwlhfKxhvG8jE/HR0+n3n/HdUvIeJEN3MqYXn3IXXvtGour0gtHTOjzYCZvISwrd9qKEIlGb3BIVyh61436+L89/QQuHW6GHIw0tXbIVZ/OktCBR6AoQBkIl4HBXrXaUoOvt/jsWPH9RfydyFt29x1VQMKaWYIREOZ7P9oZ79szXvbNnnu667uWpcpYt3jyq2scYhNvdGly/ZlPPtl6E5N67/E3XpIlvXV6zrhzcpSUveqbe+KeebZesZXkb1m2CUTiyM9ag603BNd9+om/zJYRk3TbvPd+0qf9xeay6MlCg/MuW/IvnC9ef6Xuv32OZZmNj8ONbyj5Wsdi4LhGfpWOZWlHhW/m/'+
			'fXm+zPBdUrPoN/zTQ6GWgh/9cCGaltZLOGMaXk91eNvPlvdHBgyS0AW/evvb4VUr1+HIrunYgIJI6MnHv+4uKqwZqM+gCULe/avLc+75xkY+A0uxgljOoxuX+L9U9v5g/YbMmMZ/b8NjGdOnPe2caVcG2d9/8IHA4oUVQ/UbkhDp86kJ27et8RVP+wWfwpmiIBb8/oP3Za1YvnU4/YeVU2tZWcY1L+38VujeZQ/zKSJFQSTn0Y2LhksGpPFWZkP5jiX1P/7pM4BvTC+7Xk916MnHvz6Uz+iLtF5TbX9nf/H57/3g11Zd/XUwtghRoPSiwr3hbT/7B3dRYXVKAkmzjpr516VHrnn15VmBL3+pnLFSWALQ9abMFcu/k//bl+enQwY48O5/+zv7pzaWP/tw/PCRMqFsL3D5Z4jb3eopLXkxuObbT/QXjqcCx/4dInr4yP'+
			'SGHz3+ROzDj0qFrfTLQoiU7Z7ZM14Prl+7ydsna00Xjv9/SNvuPXPaKnYtje5/d6GKx3O6FTlIiPD7z/j/9rYXMr/2led9PYo7TmDU/lDFqK7Jjx48VNJWsWth7INjc4nFwpAeIQqUDGRWe2fNqPTPL6vwlZa8p4dzL3lfzgmMGiF9ETvxYahj339Pts6czbcbmwKJqiqfUX0uF/CilCBJiAVEvTOnN0ifL6ZfXdDmKiqs9pXMOe0uKrwsieb/AyC2L+CsiDB/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cn-flag";
		el.ggDy=0.04;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='position : absolute;';
		hs+='right : 39.96%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0.04%);';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cnflag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cnflag.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._cnflag.ggCurrentLogicStateSize != newLogicStateSize) {
				me._cnflag.ggCurrentLogicStateSize = newLogicStateSize;
				me._cnflag.style.transition='width 0s, height 0s';
				if (me._cnflag.ggCurrentLogicStateSize == 0) {
					me._cnflag.style.width='30px';
					me._cnflag.style.height='30px';
					me._cnflag.style.top = 'calc(50% - (30px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._cnflag);
				}
				else {
					me._cnflag.style.width='46px';
					me._cnflag.style.height='46px';
					me._cnflag.style.top = 'calc(50% - (46px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._cnflag);
				}
			}
		}
		me._cnflag.logicBlock_size();
		me._cnflag.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 500ms ease-out 0ms';
			}
			me._menulang.style.opacity='0';
			me._menulang.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._cnactive.style.transition='none';
			} else {
				me._cnactive.style.transition='all 300ms ease 0ms';
			}
			me._cnactive.style.opacity='1';
			me._cnactive.style.visibility=me._cnactive.ggVisible?'inherit':'hidden';
			player.setLanguage("zh-CN");
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease-out 0ms';
				}
				me._btndrone.style.opacity='1';
				me._btndrone.style.visibility=me._btndrone.ggVisible?'inherit':'hidden';
			}
		}
		me._cnflag.ggUpdatePosition=function (useTransition) {
		}
		me._menulang.appendChild(me._cnflag);
		el=me._enflag=document.createElement('div');
		els=me._enflag__img=document.createElement('img');
		els.className='ggskin ggskin_enflag';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="en-flag";
		el.ggDy=0.04;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='position : absolute;';
		hs+='right : 20%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0.04%);';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._enflag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enflag.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._enflag.ggCurrentLogicStateSize != newLogicStateSize) {
				me._enflag.ggCurrentLogicStateSize = newLogicStateSize;
				me._enflag.style.transition='width 0s, height 0s';
				if (me._enflag.ggCurrentLogicStateSize == 0) {
					me._enflag.style.width='30px';
					me._enflag.style.height='30px';
					me._enflag.style.top = 'calc(50% - (30px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._enflag);
				}
				else {
					me._enflag.style.width='46px';
					me._enflag.style.height='46px';
					me._enflag.style.top = 'calc(50% - (46px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._enflag);
				}
			}
		}
		me._enflag.logicBlock_size();
		me._enflag.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 500ms ease-out 0ms';
			}
			me._menulang.style.opacity='0';
			me._menulang.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._enactive.style.transition='none';
			} else {
				me._enactive.style.transition='all 300ms ease 0ms';
			}
			me._enactive.style.opacity='1';
			me._enactive.style.visibility=me._enactive.ggVisible?'inherit':'hidden';
			player.setLanguage("en");
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease-out 0ms';
				}
				me._btndrone.style.opacity='1';
				me._btndrone.style.visibility=me._btndrone.ggVisible?'inherit':'hidden';
			}
		}
		me._enflag.ggUpdatePosition=function (useTransition) {
		}
		me._menulang.appendChild(me._enflag);
		el=me._idflag=document.createElement('div');
		els=me._idflag__img=document.createElement('img');
		els.className='ggskin ggskin_idflag';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="id-flag";
		el.ggDy=0.04;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0.04%);';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._idflag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._idflag.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._idflag.ggCurrentLogicStateSize != newLogicStateSize) {
				me._idflag.ggCurrentLogicStateSize = newLogicStateSize;
				me._idflag.style.transition='width 0s, height 0s';
				if (me._idflag.ggCurrentLogicStateSize == 0) {
					me._idflag.style.width='30px';
					me._idflag.style.height='30px';
					me._idflag.style.top = 'calc(50% - (30px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._idflag);
				}
				else {
					me._idflag.style.width='46px';
					me._idflag.style.height='46px';
					me._idflag.style.top = 'calc(50% - (46px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._idflag);
				}
			}
		}
		me._idflag.logicBlock_size();
		me._idflag.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 500ms ease-out 0ms';
			}
			me._menulang.style.opacity='0';
			me._menulang.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._idactive.style.transition='none';
			} else {
				me._idactive.style.transition='all 300ms ease 0ms';
			}
			me._idactive.style.opacity='1';
			me._idactive.style.visibility=me._idactive.ggVisible?'inherit':'hidden';
			player.setLanguage("id");
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease-out 0ms';
				}
				me._btndrone.style.opacity='1';
				me._btndrone.style.visibility=me._btndrone.ggVisible?'inherit':'hidden';
			}
		}
		me._idflag.ggUpdatePosition=function (useTransition) {
		}
		me._menulang.appendChild(me._idflag);
		me._headerright.appendChild(me._menulang);
		el=me._nlactive=document.createElement('div');
		els=me._nlactive__img=document.createElement('img');
		els.className='ggskin ggskin_nlactive';
		els.loading = 'lazy';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgLSURBVHgB7Z15bBTXHcd/vzdr7DVQAtgYfDSxMeukatMWkwOhqI3EkbQVKVFLQgKiRFUViR4CDLRqpfifVqmatqnaKnJbVYCUpMWAnSiiNtAIKQdRAn/kIsSsl8WxIQbHHPHBenffL7+33lnvMV7PzK7xsfORZvbNu+bNd3/vzbxjdhEmiJO1tXnnL/SWoitvORAtJcA5AvFWAqjkrRQBZiWmoOsA2AVIPpDgR6JeCfReGMWJ09Wl3fXHj4dgAkC4iby8qLYw6Op7BIF+xIeVfPoF/JkPGcBiBwXReQnQhgT/DeFA4/rOzkG4SYyrgHxx2Fj8lRJRELxfgP'+
			'Yk+9wDGQpmggCAbJUE+zRX8NQ6v98P48i4Cbj/ttsW5smCLURyF5/mFpgA2CI7wij/caP/s79u7O29DuNA1gU8WFZdjii2IuKP2QKLYHLQQwR/cA0N7X3o0rluyCJZE1BV16bymp+x69eAkbZt8kFwniTt7iqUzT/3egOQBbIi4IGKmmV8Y/gbAt4DUwAk2RoIuuoe7f7oA8iQjAVsLvNskxo8BYRzYArBF94vQf704U/O7sVIBbKdjz1eKqqZLd14iIBWwlSG6NDAgNyysddr6yZjS0AWrzTkhlOceCFMA9gIfIP98pt2RBRgkeYKz32yAE9MF/EU3HZXFc7UTh4qq/KARSxZ4MFb71iKkl7j76wQpiFsiV6hDa2y8vBt2gKbyj13i7Bsna7iKdgSqymc/3pz+e1fM5/GBC9V1JRy1+gEIXwZcgGCdnThynX+M/6x'+
			'oo5pgS8s8hSFefAkZ8RTICyGMB2uN6HPmBEKXPg8fyyCHIMfDO+4s7xm71jx0gp4oMKznT9WQ66CsPFAxZIN6aOMQlPZkm9IId7mCHmQw/AgxOUbEFzxeKfvrFG4oQXuLy6eRQKfy3XxFIhQ7Ma8Z0YLNxRQy5/7KCe9Fxx01h4qq/mhUUBKFY6O552atENSEwQSegfEwN2Pd3RcifdPsUAEbbMjXiqEVO2W+ZuS/RMs8AWPp6hgEM5O1BD8pIeg7UaYVjx2sa1H90qwQPcA7nTESwOCx63RhkSvKE0V1YsJNB4oyL2HZov4BnFwmd4WunTfgpLyu8JDAfPiqTHcuAaAZ8C4nRj92EwcozRWy2EGq+XA6Hh11K/KDbAUOjr+HwnTI0kiNdKyeqRMqIZ3YhGGXemO4044xrEZRtIY55a+HBgXYjYNpDlbSukaNcT1ej'+
			'g/bZN6YO7jbQY4mOEKT9vOUw79JrIFHPGsMJeNbpVy6AL+ABysslntRLT6VoODVWrVTllgKW8V4GCVEja+YiXgCoh7nHEwzVzeligBvwoOdrlPCTgXHOyyUAlYCQ52me0ImBnl+l3YwR4LkW/Ftpd2OUCX5cVFDglojoAZ4giYGSEl4FVwsEuPEvBTcLBLpxKwHRzs0q0E7AIHu1xVAvaAg10uKgFPgoNd3lA9ETWY+jFvbnCwgnololRZ4EXesvoCXo7g5Zm5fsE79ab3GXCwymm103si+8DBKg1qp0+sq98nuAROO2iWa7zN59objlggO9SqhDfAwSz/UeIpR2w2rvPS1eckock3L5XhSjBe1ZO82mes1T+ZhlvFykod43OXlsxs0t0xAb+96V+vE6KqxguGlycJiJ0IJVdzLbLcSD+/Wqmkr1pS4cDhkbfN2FNw'+
			'WooVkqLLlLSR/GIXgdG0yk+lkao2RDJHdkv2i3zRkbJE0ySUjXPmcKSRQSV1fnU8/Kny53skuSBetOSyD1+bjOYoEuIO+2vR80a83guEhmLPzpruuNJ+tH/e4tUBTvFgqupo4GN8ZBwznQWNhCemxZhvavzUWKOnEoZnNEqBhuVM9hO/6ji6603D3LUZ8CJHvwAOo4BeGcCmeJ8EAdteqVP94j3gYAjK8G/9x7cljJ+m2jfRXzhqBzgkc+qamw4me2rJHpG2cMkapfL3wSEGSbnlwv92f5Tsbzgn0t6yYw9b4hFwGAbh+c0rBo4ZBY06qSRQ28537c8g56HLErTf1NfXS6PQUQX0tm7/kEca6iDHEWHc5G/Z5h81PF3i9ns/38ePqvshd/m791hda7oI6eeF2WzbW/vVmzltkGsgnZSBvjFroImJ9XopxIy7uIflg9'+
			'zhnZCmPeI/Xn9jrIime+mVa/74da7Or7JzHkxvvBK1VenavXhML+0417rj3TyiZao7A9MWPBOU4W+ZFU9haW3Mx0d2noM813fYbqdjm3haonjwk6O7LY0FWF5c5HvlF2cFwjqYRisaeKTqLZ6evN+K5cXSgk1q1v5+djCgPcvOJ2AqQ9jgO7LjSbBJxkO9VQ88s4G/wQbutcyGKQSXuYuE/ImvZddhyICM1wf6WupelOhSjzkvw1SB+7a8W56peMNZZYna2oa8q/M//y4JepqrRQ1MRhDe5w7tTn9L+t6FtSyzzO3rfjd/qD//Ic75KW5gJsUPlvFFfsAzGw19Xyrcc7lxax9kkawLqOP5XkNROHT9MZ5i2spDY5Z/GTIb8BwHj9/JP4fdrkZ/87ZxWYk7bgLqVK59tgQDwWUs5HqeK3uYUv5kILtwW9wjJR5GQf+E'+
			'UOh937FfXoNxZNwFTGbxmj89QBR+gq9UWaV6T3kmZABPg14GKXt4EvMEavLf7bPeeQsaG8Nwk7jpAsZTtfLpOaSJOwWI5dy4L+B53Ft4PrecgxYJgvns1qccQkTYw9bVyTeobp7duQZSdIGk14Zcor2zdXsvTBBfADAuy8FeV2ewAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="nl-active";
		el.ggDy=0.04;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0.04%);';
		hs+='visibility : hidden;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nlactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nlactive.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nlactive.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nlactive.ggCurrentLogicStateSize = newLogicStateSize;
				me._nlactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._nlactive.ggCurrentLogicStateSize == 0) {
					me._nlactive.style.width='30px';
					me._nlactive.style.height='30px';
					me._nlactive.style.top = 'calc(50% - (30px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._nlactive);
				}
				else {
					me._nlactive.style.width='46px';
					me._nlactive.style.height='46px';
					me._nlactive.style.top = 'calc(50% - (46px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._nlactive);
				}
			}
		}
		me._nlactive.logicBlock_size();
		me._nlactive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "nl"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nlactive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nlactive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nlactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._nlactive.ggCurrentLogicStateVisible == 0) {
					me._nlactive.style.visibility=(Number(me._nlactive.style.opacity)>0||!me._nlactive.style.opacity)?'inherit':'hidden';
					me._nlactive.ggVisible=true;
				}
				else {
					me._nlactive.style.visibility="hidden";
					me._nlactive.ggVisible=false;
				}
			}
		}
		me._nlactive.logicBlock_visible();
		me._nlactive.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getLanguage() == "nl"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nlactive.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nlactive.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nlactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._nlactive.ggCurrentLogicStateAlpha == 0) {
					me._nlactive.style.visibility=me._nlactive.ggVisible?'inherit':'hidden';
					me._nlactive.style.opacity=1;
				}
				else {
					me._nlactive.style.visibility="hidden";
					me._nlactive.style.opacity=0;
				}
			}
		}
		me._nlactive.logicBlock_alpha();
		me._nlactive.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 300ms ease-out 0ms';
			}
			me._menulang.style.opacity='1';
			me._menulang.style.visibility=me._menulang.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._nlactive.style.transition='none';
			} else {
				me._nlactive.style.transition='all 300ms ease 0ms';
			}
			me._nlactive.style.opacity='0';
			me._nlactive.style.visibility='hidden';
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease 0ms';
				}
				me._btndrone.style.opacity='0';
				me._btndrone.style.visibility='hidden';
			}
		}
		me._nlactive.ggUpdatePosition=function (useTransition) {
		}
		me._headerright.appendChild(me._nlactive);
		el=me._aractive=document.createElement('div');
		els=me._aractive__img=document.createElement('img');
		els.className='ggskin ggskin_aractive';
		els.loading = 'lazy';
		hs=basePath + 'images/aractive.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ar-active";
		el.ggDy=0.04;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0.04%);';
		hs+='visibility : hidden;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._aractive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._aractive.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._aractive.ggCurrentLogicStateSize != newLogicStateSize) {
				me._aractive.ggCurrentLogicStateSize = newLogicStateSize;
				me._aractive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._aractive.ggCurrentLogicStateSize == 0) {
					me._aractive.style.width='30px';
					me._aractive.style.height='30px';
					me._aractive.style.top = 'calc(50% - (30px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._aractive);
				}
				else {
					me._aractive.style.width='46px';
					me._aractive.style.height='46px';
					me._aractive.style.top = 'calc(50% - (46px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._aractive);
				}
			}
		}
		me._aractive.logicBlock_size();
		me._aractive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "ar"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._aractive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._aractive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._aractive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._aractive.ggCurrentLogicStateVisible == 0) {
					me._aractive.style.visibility=(Number(me._aractive.style.opacity)>0||!me._aractive.style.opacity)?'inherit':'hidden';
					me._aractive.ggVisible=true;
				}
				else {
					me._aractive.style.visibility="hidden";
					me._aractive.ggVisible=false;
				}
			}
		}
		me._aractive.logicBlock_visible();
		me._aractive.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getLanguage() == "ar"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._aractive.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._aractive.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._aractive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._aractive.ggCurrentLogicStateAlpha == 0) {
					me._aractive.style.visibility=me._aractive.ggVisible?'inherit':'hidden';
					me._aractive.style.opacity=1;
				}
				else {
					me._aractive.style.visibility="hidden";
					me._aractive.style.opacity=0;
				}
			}
		}
		me._aractive.logicBlock_alpha();
		me._aractive.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 300ms ease-out 0ms';
			}
			me._menulang.style.opacity='1';
			me._menulang.style.visibility=me._menulang.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._aractive.style.transition='none';
			} else {
				me._aractive.style.transition='all 300ms ease 0ms';
			}
			me._aractive.style.opacity='0';
			me._aractive.style.visibility='hidden';
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease 0ms';
				}
				me._btndrone.style.opacity='0';
				me._btndrone.style.visibility='hidden';
			}
		}
		me._aractive.ggUpdatePosition=function (useTransition) {
		}
		me._headerright.appendChild(me._aractive);
		el=me._cnactive=document.createElement('div');
		els=me._cnactive__img=document.createElement('img');
		els.className='ggskin ggskin_cnactive';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cn-active";
		el.ggDy=0.04;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0.04%);';
		hs+='visibility : hidden;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cnactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cnactive.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._cnactive.ggCurrentLogicStateSize != newLogicStateSize) {
				me._cnactive.ggCurrentLogicStateSize = newLogicStateSize;
				me._cnactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._cnactive.ggCurrentLogicStateSize == 0) {
					me._cnactive.style.width='30px';
					me._cnactive.style.height='30px';
					me._cnactive.style.top = 'calc(50% - (30px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._cnactive);
				}
				else {
					me._cnactive.style.width='46px';
					me._cnactive.style.height='46px';
					me._cnactive.style.top = 'calc(50% - (46px / 2) - (0px / 2) + 0.04%)';
					skin.updateSize(me._cnactive);
				}
			}
		}
		me._cnactive.logicBlock_size();
		me._cnactive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "zh-CN"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cnactive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cnactive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cnactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._cnactive.ggCurrentLogicStateVisible == 0) {
					me._cnactive.style.visibility=(Number(me._cnactive.style.opacity)>0||!me._cnactive.style.opacity)?'inherit':'hidden';
					me._cnactive.ggVisible=true;
				}
				else {
					me._cnactive.style.visibility="hidden";
					me._cnactive.ggVisible=false;
				}
			}
		}
		me._cnactive.logicBlock_visible();
		me._cnactive.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getLanguage() == "zh-CN"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._cnactive.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._cnactive.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._cnactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._cnactive.ggCurrentLogicStateAlpha == 0) {
					me._cnactive.style.visibility=me._cnactive.ggVisible?'inherit':'hidden';
					me._cnactive.style.opacity=1;
				}
				else {
					me._cnactive.style.visibility="hidden";
					me._cnactive.style.opacity=0;
				}
			}
		}
		me._cnactive.logicBlock_alpha();
		me._cnactive.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 300ms ease-out 0ms';
			}
			me._menulang.style.opacity='1';
			me._menulang.style.visibility=me._menulang.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._cnactive.style.transition='none';
			} else {
				me._cnactive.style.transition='all 300ms ease 0ms';
			}
			me._cnactive.style.opacity='0';
			me._cnactive.style.visibility='hidden';
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease 0ms';
				}
				me._btndrone.style.opacity='0';
				me._btndrone.style.visibility='hidden';
			}
		}
		me._cnactive.ggUpdatePosition=function (useTransition) {
		}
		me._headerright.appendChild(me._cnactive);
		el=me._enactive=document.createElement('div');
		els=me._enactive__img=document.createElement('img');
		els.className='ggskin ggskin_enactive';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="en-active";
		el.ggDy=-0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) - 0.5%);';
		hs+='visibility : hidden;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._enactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enactive.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._enactive.ggCurrentLogicStateSize != newLogicStateSize) {
				me._enactive.ggCurrentLogicStateSize = newLogicStateSize;
				me._enactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._enactive.ggCurrentLogicStateSize == 0) {
					me._enactive.style.width='30px';
					me._enactive.style.height='30px';
					me._enactive.style.top = 'calc(50% - (30px / 2) - (0px / 2) + -0.5%)';
					skin.updateSize(me._enactive);
				}
				else {
					me._enactive.style.width='46px';
					me._enactive.style.height='46px';
					me._enactive.style.top = 'calc(50% - (46px / 2) - (0px / 2) + -0.5%)';
					skin.updateSize(me._enactive);
				}
			}
		}
		me._enactive.logicBlock_size();
		me._enactive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "en"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enactive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enactive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._enactive.ggCurrentLogicStateVisible == 0) {
					me._enactive.style.visibility=(Number(me._enactive.style.opacity)>0||!me._enactive.style.opacity)?'inherit':'hidden';
					me._enactive.ggVisible=true;
				}
				else {
					me._enactive.style.visibility="hidden";
					me._enactive.ggVisible=false;
				}
			}
		}
		me._enactive.logicBlock_visible();
		me._enactive.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getLanguage() == "en"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._enactive.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._enactive.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._enactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._enactive.ggCurrentLogicStateAlpha == 0) {
					me._enactive.style.visibility=me._enactive.ggVisible?'inherit':'hidden';
					me._enactive.style.opacity=1;
				}
				else {
					me._enactive.style.visibility="hidden";
					me._enactive.style.opacity=0;
				}
			}
		}
		me._enactive.logicBlock_alpha();
		me._enactive.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 300ms ease-out 0ms';
			}
			me._menulang.style.opacity='1';
			me._menulang.style.visibility=me._menulang.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._enactive.style.transition='none';
			} else {
				me._enactive.style.transition='all 300ms ease 0ms';
			}
			me._enactive.style.opacity='0';
			me._enactive.style.visibility='hidden';
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease 0ms';
				}
				me._btndrone.style.opacity='0';
				me._btndrone.style.visibility='hidden';
			}
		}
		me._enactive.ggUpdatePosition=function (useTransition) {
		}
		me._headerright.appendChild(me._enactive);
		el=me._idactive=document.createElement('div');
		els=me._idactive__img=document.createElement('img');
		els.className='ggskin ggskin_idactive';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="id-active";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button menu-scale";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._idactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._idactive.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._idactive.ggCurrentLogicStateSize != newLogicStateSize) {
				me._idactive.ggCurrentLogicStateSize = newLogicStateSize;
				me._idactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._idactive.ggCurrentLogicStateSize == 0) {
					me._idactive.style.width='30px';
					me._idactive.style.height='30px';
					me._idactive.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._idactive);
				}
				else {
					me._idactive.style.width='46px';
					me._idactive.style.height='46px';
					me._idactive.style.top = 'calc(50% - (46px / 2))';
					skin.updateSize(me._idactive);
				}
			}
		}
		me._idactive.logicBlock_size();
		me._idactive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "id-ID"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._idactive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._idactive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._idactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._idactive.ggCurrentLogicStateVisible == 0) {
					me._idactive.style.visibility=(Number(me._idactive.style.opacity)>0||!me._idactive.style.opacity)?'inherit':'hidden';
					me._idactive.ggVisible=true;
				}
				else {
					me._idactive.style.visibility="hidden";
					me._idactive.ggVisible=false;
				}
			}
		}
		me._idactive.logicBlock_visible();
		me._idactive.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getLanguage() == "id-ID"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._idactive.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._idactive.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._idactive.style.transition='width 0s, height 0s, opacity 0s';
				if (me._idactive.ggCurrentLogicStateAlpha == 0) {
					me._idactive.style.visibility=me._idactive.ggVisible?'inherit':'hidden';
					me._idactive.style.opacity=1;
				}
				else {
					me._idactive.style.visibility="hidden";
					me._idactive.style.opacity=0;
				}
			}
		}
		me._idactive.logicBlock_alpha();
		me._idactive.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menulang.style.transition='none';
			} else {
				me._menulang.style.transition='all 300ms ease-out 0ms';
			}
			me._menulang.style.opacity='1';
			me._menulang.style.visibility=me._menulang.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._idactive.style.transition='none';
			} else {
				me._idactive.style.transition='all 300ms ease 0ms';
			}
			me._idactive.style.opacity='0';
			me._idactive.style.visibility='hidden';
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				if (player.transitionsDisabled) {
					me._btndrone.style.transition='none';
				} else {
					me._btndrone.style.transition='all 300ms ease 0ms';
				}
				me._btndrone.style.opacity='0';
				me._btndrone.style.visibility='hidden';
			}
		}
		me._idactive.ggUpdatePosition=function (useTransition) {
		}
		me._headerright.appendChild(me._idactive);
		me.divSkin.appendChild(me._headerright);
		el=me._headerleft=document.createElement('div');
		el.ggId="header-left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container menu-scale";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : 5%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : hidden;';
		hs+='width : 17.6563%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._headerleft.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._headerleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._logo=document.createElement('div');
		els=me._logo__img=document.createElement('img');
		els.className='ggskin ggskin_logo';
		els.loading = 'lazy';
		hs=basePath + 'images/logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 85px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._logo.ggCurrentLogicStateSize != newLogicStateSize) {
				me._logo.ggCurrentLogicStateSize = newLogicStateSize;
				me._logo.style.transition='width 0s, height 0s';
				if (me._logo.ggCurrentLogicStateSize == 0) {
					me._logo.style.width='40px';
					me._logo.style.height='52px';
					skin.updateSize(me._logo);
				}
				else {
					me._logo.style.width='65px';
					me._logo.style.height='85px';
					skin.updateSize(me._logo);
				}
			}
		}
		me._logo.logicBlock_size();
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		me._headerleft.appendChild(me._logo);
		el=me._titlecontainer=document.createElement('div');
		el.ggId="title-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 76px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 251px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._titlecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titlecontainer.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._titlecontainer.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._titlecontainer.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._titlecontainer.style.transition='left 0s, top 0s';
				if (me._titlecontainer.ggCurrentLogicStatePosition == 0) {
					me._titlecontainer.style.left='58px';
					me._titlecontainer.style.top='-12px';
				}
				else {
					me._titlecontainer.style.left='88px';
					me._titlecontainer.style.top='0px';
				}
			}
		}
		me._titlecontainer.logicBlock_position();
		me._titlecontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._titletxt=document.createElement('div');
		els=me._titletxt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title-txt";
		el.ggDy=-1.33;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text header-font";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1.33%);';
		hs+='visibility : inherit;';
		hs+='width : 76.8924%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 2px 3px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._titletxt.ggUpdateText=function() {
			var params = [];
			var hs = player._("Pulau<br>Sebuku", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._titletxt.ggUpdateText();
		el.appendChild(els);
		me._titletxt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titletxt.ggUpdatePosition=function (useTransition) {
		}
		me._titlecontainer.appendChild(me._titletxt);
		me._headerleft.appendChild(me._titlecontainer);
		me.divSkin.appendChild(me._headerleft);
		el=me._g_compass=document.createElement('div');
		el.ggId="g_compass";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container menu-scale";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5%;';
		hs+='height : 119px;';
		hs+='left : 1%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._g_compass.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._g_compass.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._g_compass.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._g_compass.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._g_compass.style.transition='left 0s, bottom 0s';
				if (me._g_compass.ggCurrentLogicStatePosition == 0) {
					me._g_compass.style.left='1%';
					me._g_compass.style.bottom='25%';
				}
				else {
					me._g_compass.style.left='1%';
					me._g_compass.style.bottom='5%';
				}
			}
		}
		me._g_compass.logicBlock_position();
		me._g_compass.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._g_compass.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._g_compass.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._g_compass.style.transition='left 0s, bottom 0s';
				if (me._g_compass.ggCurrentLogicStateVisible == 0) {
					me._g_compass.style.visibility="hidden";
					me._g_compass.ggVisible=false;
				}
				else {
					me._g_compass.style.visibility=(Number(me._g_compass.style.opacity)>0||!me._g_compass.style.opacity)?'inherit':'hidden';
					me._g_compass.ggVisible=true;
				}
			}
		}
		me._g_compass.logicBlock_visible();
		me._g_compass.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoom_background=document.createElement('div');
		el.ggId="zoom_background";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((30px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoom_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij4KIDxwYXRoIGQ9Ik0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0em0yLjUtNGgtMn'+
			'YySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPgo=';
		me._zoom_in__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_in";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['zoom_in'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_in.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_in.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_in.style.transition='opacity 0s';
				if (me._zoom_in.ggCurrentLogicStateAlpha == 0) {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=0.6;
				}
				else {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=0.5;
				}
			}
		}
		me._zoom_in.logicBlock_alpha();
		me._zoom_in.onmouseenter=function (e) {
			me.elementMouseOver['zoom_in']=true;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.onmouseleave=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.ggCurrentLogicStateAlpha = -1;
		me._zoom_in.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoom_in']) {
				player.changeFovLog(-0.4,true);
			}
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._zoom_background.appendChild(me._zoom_in);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij4KIDxwYXRoIGQ9Ik0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0ek03IDloNXYxSD'+
			'd6IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+Cg==';
		me._zoom_out__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_out";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['zoom_out'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_out.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_out.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_out.style.transition='opacity 0s';
				if (me._zoom_out.ggCurrentLogicStateAlpha == 0) {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=0.6;
				}
				else {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=0.5;
				}
			}
		}
		me._zoom_out.logicBlock_alpha();
		me._zoom_out.onmouseenter=function (e) {
			me.elementMouseOver['zoom_out']=true;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.onmouseleave=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.ggCurrentLogicStateAlpha = -1;
		me._zoom_out.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoom_out']) {
				player.changeFovLog(0.4,true);
			}
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._zoom_background.appendChild(me._zoom_out);
		me._g_compass.appendChild(me._zoom_background);
		el=me._compass_background=document.createElement('div');
		el.ggId="compass_background";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 13px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 26px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._compass_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._rotate_right=document.createElement('div');
		els=me._rotate_right__img=document.createElement('img');
		els.className='ggskin ggskin_rotate_right';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmE2YTYzOTY4YSwgMjAyNC8wMy8wNi0xMTo1MjowNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZj'+
			'pEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjExIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExNkVGMkM2NDJDOTExRUZBMEMxQkVGODhDN0E2MDcyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExNkVGMkM3NDJDOTExRUZBMEMxQkVGODhD'+
			'N0E2MDcyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE2RUYyQzQ0MkM5MTFFRkEwQzFCRUY4OEM3QTYwNzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTE2RUYyQzU0MkM5MTFFRkEwQzFCRUY4OEM3QTYwNzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4GyKjFAAADZ0lEQVR42uyd220aQRSGhygF5KJc3oIrCKkgpIO4AkMFZiswroCkAq8rMKkAXEFIBzzmoiTbAZkTjSULRexZlp2cGb5fQvAweNF++5/L7Oy4t9lsHLKjB5wCgCCAAAQBBCAIIPnroaUf8+3Hr5l/G0Q+7PWLZ0'+
			'9KgPxbAmMY+Zi3hCwEEIAggAAEAYQ+JK5WLcrlRwA5sF4+f1o0/c7X7z9H/6F3IWTtgHFFDgEGQLZgSM6YUWXZgCHJe5FLEs/BITcNYKwA0q07pg0qKoHxDiDd5o2LJjB8GV0BpDtpKyqBcJoijGSAhFA1UMIQZ6xJ6t1WVefK4YWHsXIJKwWHzJRVVelhlJS93bqj799GiqESogqXgaw7RFtVFakm8WSAhNyhccfSw5jTqXeviXLc2GUky0DOlIl8DZA4XXlfMfTSZSarDtH0HfPc3GEZyFAx5tplKGuLHLThat2gsqoLa0uAtHeHusz14KZ1Yyw9iWwxZL1VjPnkMlXP0tXR6/UkZP12u+euKn/VPz7kcXHI7u68biJx5TKWtZCluedxCxBbQHBIRGnue6wBEk+vFGUsDomovjtypbZQbgUQW6oAggACEASQPTUE'+
			'CEn7qIF8qRsQFs8BhObxOIEsFWMGALGVQ14DJJKUE4dDgNgKW/2cE7tFIBqXvAdIPGlu0Z7lCsTcqpPQa2h+1MmhlpKy6qRemoVw5zk6xCoQzUK4UVg2BJBIDqnrSQTGBCBx+pFKG7Zyc4nluayPijHZucRklXUnf/UvlJ15q4qLKksv7SNr2ewsZxqIv+qXTjcDPPRumgDElksuwtNXAIngklKZ4K9Sr7pSuWNYON29EnHIDUDi9CXa0CX5JNkkb7rs3ZY/0XL1a6feZZcH1bYblL37a+z0S4VGKTolKYcEl0ijuGjwZ2s3xMQh7auuJjsASaL/nEpJnOTa3rCVX9ngK/0AZUrIOnDI2gpfkiNGDQ8jIWx8f4WLqXOQMpAWUFxw2KVMSgLkgEBaQvlbuVn6T59ZPB8S+o19T2qfpN4dlOT3X8zqCapQfb1xCW8ukN'+
			'0jbaF6EihzgNiBIls4nfqP8qoAYgeMuOTEvz4AxJZbigCmBIgdMOtQiZkGk0VjuGczebe3fGWpMTQFBLGTA0AQQACCAAIQBJCj0B8BBgA7BRl2mHkBewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate_right";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : -16px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rotate_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_right.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['rotate_right'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rotate_right.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rotate_right.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rotate_right.style.transition='opacity 0s';
				if (me._rotate_right.ggCurrentLogicStateAlpha == 0) {
					me._rotate_right.style.visibility=me._rotate_right.ggVisible?'inherit':'hidden';
					me._rotate_right.style.opacity=0.6;
				}
				else {
					me._rotate_right.style.visibility=me._rotate_right.ggVisible?'inherit':'hidden';
					me._rotate_right.style.opacity=0.5;
				}
			}
		}
		me._rotate_right.logicBlock_alpha();
		me._rotate_right.onmouseenter=function (e) {
			me.elementMouseOver['rotate_right']=true;
			me._rotate_right.logicBlock_alpha();
		}
		me._rotate_right.onmousedown=function (e) {
			me.elementMouseDown['rotate_right']=true;
		}
		me._rotate_right.onmouseup=function (e) {
			me.elementMouseDown['rotate_right']=false;
		}
		me._rotate_right.onmouseleave=function (e) {
			me.elementMouseDown['rotate_right']=false;
			me.elementMouseOver['rotate_right']=false;
			me._rotate_right.logicBlock_alpha();
		}
		me._rotate_right.ggCurrentLogicStateAlpha = -1;
		me._rotate_right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['rotate_right']) {
				player.changePanLog(-1,true);
			}
		}
		me._rotate_right.ggUpdatePosition=function (useTransition) {
		}
		me._compass_background.appendChild(me._rotate_right);
		el=me._rotate_left=document.createElement('div');
		els=me._rotate_left__img=document.createElement('img');
		els.className='ggskin ggskin_rotate_left';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmE2YTYzOTY4YSwgMjAyNC8wMy8wNi0xMTo1MjowNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZj'+
			'pEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjExIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExNkVGMkMyNDJDOTExRUZBMEMxQkVGODhDN0E2MDcyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExNkVGMkMzNDJDOTExRUZBMEMxQkVGODhD'+
			'N0E2MDcyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjM4QjBERjU0MkM1MTFFRkEwQzFCRUY4OEM3QTYwNzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjM4QjBERjY0MkM1MTFFRkEwQzFCRUY4OEM3QTYwNzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5beHd/AAADUklEQVR42uyd23HTQBSGJcYFGDJc3hAVYCrA6QBXELkCkgqMKwipwEoFOBWgVICpAD9yGUAdmN2wDzwk6Eixds5Zf/+MJzOZtS37m/9cpKN1vtvtMqRHD/gKAIIAAhAEEIAggKSvkaaD+fbjV+n+nER+283Tx4'+
			'/OAHK7CveYErIQQBBAAIIAAhCUdtl7HzW+p+jThwBkGI3d4/LZk6Oq6xM1XaRLLWStvn7/WZJDgAKQFp07KBOA6MonHx2UMUCG16YDlA8AGV7HHaBMnUveAWRAubK26QhlYSmfmMwhAcosNIOiygsgw0PZBqdIoEyshC7TVZaD4sOW9PLrWwtVl/myN5wqqYRV1zlA4si7ZCtYVzqXFACJk+SloWsBkDhQ1u5PLXTJGCBxNBeuOwVIvFJYkuBPABJPS8GaQmv3nhyQ4JK1pC8BSDxdCtZMNR64tmvq9Z5csnYhyTulaAtbodsHyB1fZL0vKCFsnQpcogpIynNZV4I1r7UddK5pBCbP872+ngtJv7O/57DuUuNc+ZAxoHhqC0djbV176kCuBWsmANHjEIBE1lawhpAVsYyWOOQ5QHSpAIi+PAKQiGoAggACEASQnpoC'+
			'hKQPkNskHIr7DJADbfoAIjtxWAMknl6SQ4xVWNqGHJIFEhJ6Ww6ptR13yg55I1izAUg8SeZ3r7UddJJTJyFcfRHkj5s3ZOpkeEnmdtcaDzw5IGGspxQsvQJIHPnx0bbBhQaHxHOHKFyF+xIBosAdXhdaP0AyVZa0svLNoHPH8b//oMoaRtL9TJaaP0QSQJw7fKiaCt1RA2RYGP4U+yIFd5gHEqqqlTCRV9rdkYJD/BZ+kotQXbbeAEhPd6wy+UTJUmvfkUTZG2CUwpf1TeDsfwsoe+/vDCkM74q5pc83MgTiZi/erNsdTzMrocqUQ0Jp+6kjjLmFqsockLB5pYdRdHha1edXEghZ7a5YZd1vyvQw5plRjRSCKELnXfZ4umkY6oCEn5nou+mxeRgac0hxyDBMlb0t1VSVJSLLQLahz9hkCcnquSw/oPAqNRgWHdKEEL'+
			'XOEpUlh7x3jxcpw7DiEJ+wl2G30eQ1AgRA2iqns9BXNNkBStUFKsR96gBBAAEIAghAEEAOQn8EGADkRf75Nr9LaQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate_left";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='right : -16px;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rotate_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_left.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['rotate_left'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rotate_left.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rotate_left.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rotate_left.style.transition='opacity 0s';
				if (me._rotate_left.ggCurrentLogicStateAlpha == 0) {
					me._rotate_left.style.visibility=me._rotate_left.ggVisible?'inherit':'hidden';
					me._rotate_left.style.opacity=0.6;
				}
				else {
					me._rotate_left.style.visibility=me._rotate_left.ggVisible?'inherit':'hidden';
					me._rotate_left.style.opacity=0.5;
				}
			}
		}
		me._rotate_left.logicBlock_alpha();
		me._rotate_left.onmouseenter=function (e) {
			me.elementMouseOver['rotate_left']=true;
			me._rotate_left.logicBlock_alpha();
		}
		me._rotate_left.onmousedown=function (e) {
			me.elementMouseDown['rotate_left']=true;
		}
		me._rotate_left.onmouseup=function (e) {
			me.elementMouseDown['rotate_left']=false;
		}
		me._rotate_left.onmouseleave=function (e) {
			me.elementMouseDown['rotate_left']=false;
			me.elementMouseOver['rotate_left']=false;
			me._rotate_left.logicBlock_alpha();
		}
		me._rotate_left.ggCurrentLogicStateAlpha = -1;
		me._rotate_left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['rotate_left']) {
				player.changePanLog(1,true);
			}
		}
		me._rotate_left.ggUpdatePosition=function (useTransition) {
		}
		me._compass_background.appendChild(me._rotate_left);
		el=me._compass_pointer_container=document.createElement('div');
		el.ggId="compass_pointer_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : calc(50% - ((11px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._compass_pointer_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass_pointer_container.onclick=function (e) {
			player.moveTo(0 + (player.getPan()-player.getPanNorth()), player.getTilt(), player.getFov(),5);
		}
		me._compass_pointer_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._compass_pointer=document.createElement('div');
		els=me._compass_pointer__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMjU2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbWU9Ik5ldyBkb2N1bWVudCAxIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjQgcjk5MzkiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz'+
			'pzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlkPSJzdmcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgd2lkdGg9IjI1NiIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KIDxkZWZzIGlkPSJkZWZzNCIvPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iLTgiIGlua3NjYXBlOmN5PSIxNDguNDYwMzMiIHBhZ2Vjb2xv'+
			'cj0iI2ZmZmZmZiIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgaW5rc2NhcGU6d2luZG93LXg9Ii04IiBpbmtzY2FwZTp6b29tPSIyLjgiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE4IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlkPSJiYXNlIiBzaG93Z3JpZD0iZmFsc2UiIGJvcmRlcm9wYWNpdH'+
			'k9IjEuMCIgaW5rc2NhcGU6Y3g9IjE0Ni45NzcxMSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTciPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaWQ9ImxheWVyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNzk2LjM2MjE4KSIgaW5rc2NhcGU6bGFiZWw9IkxheWVy'+
			'IDEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiPgogIDxnIGlkPSJnMzAxMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMzIuMDAwMDIpIj4KICAgPGcgaWQ9ImcyOTk3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNiwwKSI+CiAgICA8cGF0aCBkPSJtIDEwMiwxMDUyLjM2MjIgMTYsLTQ4IDE2LC00OC4wMDAwMiAtMzIsMCAwLDk2LjAwMDAyIHoiIGlkPSJwYXRoMjk5NSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6I2IzYjNiMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIvPgogICAgPHBhdGggZD0ibSA3MCwxNjAgMTYsNDggMTYsNDggMCwtOTYgLT'+
			'MyLDAgeiIgaWQ9InBhdGgyOTkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDc5Ni4zNjIxOCkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNlNmU2ZTY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiLz4KICAgPC9nPgogICA8ZyBpZD0iZzMwMDkiPgogICAgPHBhdGggZD0ibSAxMjgsODYwLjM2MjIgLTE2LDQ4IC0xNiw0OC4wMDAwMiAzMiwwIDAsLTk2LjAwMDAyIHoiIGlkPSJwYXRoMzAwMyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6I2QzNWY1ZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIvPgogICAgPHBh'+
			'dGggZD0ibSAxNjAsOTU2LjM2MjIgLTE2LC00OCAtMTYsLTQ4IDAsOTYgMzIsMCB6IiBpZD0icGF0aDMwMDUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._compass_pointer__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="compass_pointer";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 58px;';
		hs+='left : calc(50% - ((47px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((58px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._compass_pointer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass_pointer.ggUpdatePosition=function (useTransition) {
		}
		me._compass_pointer_container.appendChild(me._compass_pointer);
		me._compass_background.appendChild(me._compass_pointer_container);
		me._g_compass.appendChild(me._compass_background);
		me.divSkin.appendChild(me._g_compass);
		el=me._mobile=document.createElement('div');
		el.ggId="Mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container mobile";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 834))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile.style.transition='';
				if (me._mobile.ggCurrentLogicStateVisible == 0) {
					me._mobile.style.visibility=(Number(me._mobile.style.opacity)>0||!me._mobile.style.opacity)?'inherit':'hidden';
					me._mobile.ggVisible=true;
				}
				else {
					me._mobile.style.visibility="hidden";
					me._mobile.ggVisible=false;
				}
			}
		}
		me._mobile.logicBlock_visible();
		me._mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._bottom_menu_mobile=document.createElement('div');
		el.ggId="Bottom Menu Mobile";
		el.ggDx=0.02;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.02%);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bottom_menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 40%);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_kategori_mobile=document.createElement('div');
		els=me._button_kategori_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_button_kategori_mobile';
		els.loading = 'lazy';
		hs=basePath + 'images/button_kategori_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button Kategori Mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button category-btn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_kategori_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_kategori_mobile.onclick=function (e) {
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/kategori-id.html\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
		}
		me._button_kategori_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me._button_kategori_mobile);
		el=me._container_more=document.createElement('div');
		el.ggId="Container More";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 12%;';
		hs+='top : calc(50% - ((25px + 0px) / 2) - 10px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_more.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_more.ggUpdatePosition=function (useTransition) {
		}
		el=me._bgmore=document.createElement('div');
		els=me._bgmore__img=document.createElement('img');
		els.className='ggskin ggskin_bgmore';
		hs=basePath + 'images/bgmore.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="bg-more";
		el.ggDx=-64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 135%;';
		hs+='height : 221px;';
		hs+='left : calc(50% - ((74px + 0px) / 2) - 64%);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bgmore.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bgmore.ggUpdatePosition=function (useTransition) {
		}
		el=me._informasi=document.createElement('div');
		els=me._informasi__img=document.createElement('img');
		els.className='ggskin ggskin_informasi';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Informasi";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 10.81%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._informasi.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informasi.onclick=function (e) {
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/informasi.html?info=6&lang=id\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
		}
		me._informasi.ggUpdatePosition=function (useTransition) {
		}
		el=me._informasitext=document.createElement('div');
		els=me._informasitext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Informasi-text";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45%;';
		hs+='color : rgba(47,47,47,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._informasitext.ggUpdateText=function() {
			var params = [];
			var hs = player._("Informasi\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._informasitext.ggUpdateText();
		el.appendChild(els);
		me._informasitext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informasitext.ggUpdatePosition=function (useTransition) {
		}
		me._informasi.appendChild(me._informasitext);
		me._bgmore.appendChild(me._informasi);
		el=me._jelajah=document.createElement('div');
		els=me._jelajah__img=document.createElement('img');
		els.className='ggskin ggskin_jelajah';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Jelajah";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 38.81%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._jelajah.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._jelajah.onclick=function (e) {
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/discover.html?disc=3&lang=id\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
		}
		me._jelajah.ggUpdatePosition=function (useTransition) {
		}
		el=me._jelajahtext=document.createElement('div');
		els=me._jelajahtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Jelajah-text";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45%;';
		hs+='color : rgba(47,47,47,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._jelajahtext.ggUpdateText=function() {
			var params = [];
			var hs = player._("Jelajah", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._jelajahtext.ggUpdateText();
		el.appendChild(els);
		me._jelajahtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._jelajahtext.ggUpdatePosition=function (useTransition) {
		}
		me._jelajah.appendChild(me._jelajahtext);
		me._bgmore.appendChild(me._jelajah);
		el=me._shop_icon=document.createElement('div');
		els=me._shop_icon__img=document.createElement('img');
		els.className='ggskin ggskin_shop_icon';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Shop icon";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 66.81%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._shop_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shop_icon.onclick=function (e) {
			player.openUrl("https:\/\/dolan-esemar.semarangkota.go.id\/\n","_blank");
		}
		me._shop_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._shoptext=document.createElement('div');
		els=me._shoptext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Shop-text";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45%;';
		hs+='color : rgba(47,47,47,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._shoptext.ggUpdateText=function() {
			var params = [];
			var hs = player._("Shop", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._shoptext.ggUpdateText();
		el.appendChild(els);
		me._shoptext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shoptext.ggUpdatePosition=function (useTransition) {
		}
		me._shop_icon.appendChild(me._shoptext);
		me._bgmore.appendChild(me._shop_icon);
		me._container_more.appendChild(me._bgmore);
		el=me._more=document.createElement('div');
		els=me._more__img=document.createElement('img');
		els.className='ggskin ggskin_more';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="More";
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 74%;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 10px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._more.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._more.onclick=function (e) {
			var flag=me._bgmore.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._bgmore.style.transition='none';
			} else {
				me._bgmore.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me._bgmore.style.opacity='0';
				me._bgmore.style.visibility='hidden';
			} else {
				me._bgmore.style.opacity='1';
				me._bgmore.style.visibility=me._bgmore.ggVisible?'inherit':'hidden';
			}
			me._bgmore.ggOpacitiyActive=!flag;
		}
		me._more.ggUpdatePosition=function (useTransition) {
		}
		el=me._assistant_text=document.createElement('div');
		els=me._assistant_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Assistant Text";
		el.ggDx=150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1%;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 150%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._assistant_text.ggUpdateText=function() {
			var params = [];
			var hs = player._("More\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._assistant_text.ggUpdateText();
		el.appendChild(els);
		me._assistant_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._assistant_text.ggUpdatePosition=function (useTransition) {
		}
		me._more.appendChild(me._assistant_text);
		me._container_more.appendChild(me._more);
		me._rectangle_4.appendChild(me._container_more);
		el=me._menu=document.createElement('div');
		els=me._menu__img=document.createElement('img');
		els.className='ggskin ggskin_menu';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Menu";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 7%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu.onclick=function (e) {
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/menu.php?menu=76&lang=id\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
		}
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_tezt=document.createElement('div');
		els=me._menu_tezt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Menu Tezt";
		el.ggDx=150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0%;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((101px + 0px) / 2) + 150%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 101px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._menu_tezt.ggUpdateText=function() {
			var params = [];
			var hs = player._("Menu", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._menu_tezt.ggUpdateText();
		el.appendChild(els);
		me._menu_tezt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_tezt.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._menu_tezt);
		me._rectangle_4.appendChild(me._menu);
		me._bottom_menu_mobile.appendChild(me._rectangle_4);
		me._mobile.appendChild(me._bottom_menu_mobile);
		me.divSkin.appendChild(me._mobile);
		el=me._mapscontainer=document.createElement('div');
		el.ggId="maps-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container menu-scale map-res";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5%;';
		hs+='height : 18.7963%;';
		hs+='left : 5%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 10.3646%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mapscontainer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mapscontainer.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._mapscontainer.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._mapscontainer.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._mapscontainer.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._mapscontainer.ggCurrentLogicStatePosition == 0) {
					me._mapscontainer.style.left='71.64%';
					me._mapscontainer.style.bottom='87.2%';
				}
				else {
					me._mapscontainer.style.left='5%';
					me._mapscontainer.style.bottom='5%';
				}
			}
		}
		me._mapscontainer.logicBlock_position();
		me._mapscontainer.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._mapscontainer.ggCurrentLogicStateSize != newLogicStateSize) {
				me._mapscontainer.ggCurrentLogicStateSize = newLogicStateSize;
				me._mapscontainer.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._mapscontainer.ggCurrentLogicStateSize == 0) {
					me._mapscontainer.style.width='24%';
					me._mapscontainer.style.height='15%';
					skin.updateSize(me._mapscontainer);
				}
				else {
					me._mapscontainer.style.width='10.3646%';
					me._mapscontainer.style.height='18.7963%';
					skin.updateSize(me._mapscontainer);
				}
			}
		}
		me._mapscontainer.logicBlock_size();
		me._mapscontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._maps=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'MapsOpenStreet';
		el.ggId="maps";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='z-index: 1;';
		hs+='border-color : #eaeaea;';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 1px 1px 1px 1px;';
		hs+='bottom : 0px;';
		hs+='height : 63.0542%;';
		hs+='left : calc(50% - ((99.9998% + 2px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 99.9998%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._maps.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._maps.ggUpdatePosition=function (useTransition) {
			if (me._maps.ggMapNotLoaded == false) {
				me._maps.ggMap.invalidateSize(false);
			}
		}
		me._mapscontainer.appendChild(me._maps);
		el=me._btndrone=document.createElement('div');
		els=me._btndrone__img=document.createElement('img');
		els.className='ggskin ggskin_btndrone';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn-drone";
		el.ggDx=30.7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button btn-drone-mobile";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : calc(50% - ((37px + 0px) / 2) + 30.7%);';
		hs+='position : absolute;';
		hs+='top : 3%;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btndrone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btndrone.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._btndrone.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._btndrone.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._btndrone.style.transition='left 0s, top 0s, width 100ms ease 0ms, height 100ms ease 0ms, left 100ms ease 0ms';
				if (me._btndrone.ggCurrentLogicStatePosition == 0) {
					me._btndrone.style.left = 'calc(50% - (37px / 2) - (0px / 2) + 2%)';
					me._btndrone.style.top='119%';
				}
				else {
					me._btndrone.style.left='calc(50% - ((37px + 0px) / 2) + 30.7%)';
					me._btndrone.style.top='3%';
				}
			}
		}
		me._btndrone.logicBlock_position();
		me._btndrone.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['btndrone'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btndrone.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btndrone.ggCurrentLogicStateSize = newLogicStateSize;
				me._btndrone.style.transition='left 0s, top 0s, width 100ms ease 0ms, height 100ms ease 0ms, left 100ms ease 0ms';
				if (me._btndrone.ggCurrentLogicStateSize == 0) {
					me._btndrone.style.width='37px';
					me._btndrone.style.height='37px';
					me._btndrone.style.left = 'calc(50% - (37px / 2) - (0px / 2) + 30.7%)';
					setTimeout(function() {skin.updateSize(me._btndrone);}, 150);
				}
				else if (me._btndrone.ggCurrentLogicStateSize == 1) {
					me._btndrone.style.width='30px';
					me._btndrone.style.height='30px';
					me._btndrone.style.left = 'calc(50% - (30px / 2) - (0px / 2) + 30.7%)';
					setTimeout(function() {skin.updateSize(me._btndrone);}, 150);
				}
				else {
					me._btndrone.style.width='37px';
					me._btndrone.style.height='37px';
					me._btndrone.style.left = 'calc(50% - (37px / 2) - (0px / 2) + 30.7%)';
					setTimeout(function() {skin.updateSize(me._btndrone);}, 150);
				}
			}
		}
		me._btndrone.logicBlock_size();
		me._btndrone.onclick=function (e) {
			if (
				(
					((me.ggUserdata.tags.indexOf("IbuKrakatau") != -1))
				)
			) {
				player.openNext("{node212}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("AnakKrakatau") != -1))
				)
			) {
				player.openNext("{node55}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("AirTerjunWayKalam") != -1))
				)
			) {
				player.openNext("{node217}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("PulauSebesi") != -1))
				)
			) {
				player.openNext("{node220}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("PulauSebuku") != -1))
				)
			) {
				player.openNext("{node24}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("PantaiMinangRua") != -1))
				)
			) {
				player.openNext("{node103}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("pulaumengkudu") != -1))
				)
			) {
				player.openNext("{node101}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("PantaiRio") != -1))
				)
			) {
				player.openNext("{node60}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("rajabasa") != -1))
				)
			) {
				player.openNext("{node219}","");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("PulauUmangUmang") != -1))
				)
			) {
				player.openNext("{node120}","");
			}
		}
		me._btndrone.onmouseenter=function (e) {
			me.elementMouseOver['btndrone']=true;
			me._btndrone.logicBlock_size();
		}
		me._btndrone.onmouseleave=function (e) {
			me.elementMouseOver['btndrone']=false;
			me._btndrone.logicBlock_size();
		}
		me._btndrone.ggUpdatePosition=function (useTransition) {
		}
		me._mapscontainer.appendChild(me._btndrone);
		el=me._showimage=document.createElement('div');
		els=me._showimage__img=document.createElement('img');
		els.className='ggskin ggskin_showimage';
		els.loading = 'lazy';
		hs=basePath + 'images/showimage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="show-image";
		el.ggDx=-30.7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : calc(50% - ((37px + 0px) / 2) - 30.7%);';
		hs+='position : absolute;';
		hs+='top : 3%;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._showimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._showimage.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['showimage'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._showimage.ggCurrentLogicStateSize != newLogicStateSize) {
				me._showimage.ggCurrentLogicStateSize = newLogicStateSize;
				me._showimage.style.transition='width 100ms ease 0ms, height 100ms ease 0ms, left 100ms ease 0ms';
				if (me._showimage.ggCurrentLogicStateSize == 0) {
					me._showimage.style.width='37px';
					me._showimage.style.height='37px';
					me._showimage.style.left = 'calc(50% - (37px / 2) - (0px / 2) + -30.7%)';
					setTimeout(function() {skin.updateSize(me._showimage);}, 150);
				}
				else {
					me._showimage.style.width='37px';
					me._showimage.style.height='37px';
					me._showimage.style.left = 'calc(50% - (37px / 2) - (0px / 2) + -30.7%)';
					setTimeout(function() {skin.updateSize(me._showimage);}, 150);
				}
			}
		}
		me._showimage.logicBlock_size();
		me._showimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._showimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._showimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._showimage.style.transition='width 100ms ease 0ms, height 100ms ease 0ms, left 100ms ease 0ms';
				if (me._showimage.ggCurrentLogicStateVisible == 0) {
					me._showimage.style.visibility="hidden";
					me._showimage.ggVisible=false;
				}
				else {
					me._showimage.style.visibility=(Number(me._showimage.style.opacity)>0||!me._showimage.style.opacity)?'inherit':'hidden';
					me._showimage.ggVisible=true;
				}
			}
		}
		me._showimage.logicBlock_visible();
		me._showimage.onclick=function (e) {
			me._menubottom.style.transition='none';
			me._menubottom.style.opacity='0';
			me._menubottom.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._headerright.style.transition='none';
			} else {
				me._headerright.style.transition='all 300ms ease 0ms';
			}
			me._headerright.style.opacity='0';
			me._headerright.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._maps.style.transition='none';
			} else {
				me._maps.style.transition='all 300ms ease 0ms';
			}
			me._maps.style.opacity='0';
			me._maps.style.visibility='hidden';
			if (me._maps.ggClearMap) me._maps.ggClearMap();
			if (player.transitionsDisabled) {
				me._btndrone.style.transition='none';
			} else {
				me._btndrone.style.transition='all 300ms ease 0ms';
			}
			me._btndrone.style.opacity='0';
			me._btndrone.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._showimage.style.transition='none';
			} else {
				me._showimage.style.transition='all 300ms ease 0ms';
			}
			me._showimage.style.opacity='0';
			me._showimage.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._chatbotbuttoncontainer.style.transition='none';
			} else {
				me._chatbotbuttoncontainer.style.transition='all 300ms ease 0ms';
			}
			me._chatbotbuttoncontainer.style.opacity='0';
			me._chatbotbuttoncontainer.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._hideimage.style.transition='none';
			} else {
				me._hideimage.style.transition='all 300ms ease 0ms';
			}
			me._hideimage.style.opacity='1';
			me._hideimage.style.visibility=me._hideimage.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._g_compass.style.transition='none';
			} else {
				me._g_compass.style.transition='all 300ms ease 0ms';
			}
			me._g_compass.style.opacity='0';
			me._g_compass.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._headerleft.style.transition='none';
			} else {
				me._headerleft.style.transition='all 300ms ease 0ms';
			}
			me._headerleft.style.opacity='0';
			me._headerleft.style.visibility='hidden';
		}
		me._showimage.onmouseenter=function (e) {
			me.elementMouseOver['showimage']=true;
			me._showimage.logicBlock_size();
		}
		me._showimage.onmouseleave=function (e) {
			me.elementMouseOver['showimage']=false;
			me._showimage.logicBlock_size();
		}
		me._showimage.ggUpdatePosition=function (useTransition) {
		}
		me._mapscontainer.appendChild(me._showimage);
		el=me._hideimage=document.createElement('div');
		els=me._hideimage__img=document.createElement('img');
		els.className='ggskin ggskin_hideimage';
		els.loading = 'lazy';
		hs=basePath + 'images/hideimage.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hide-image";
		el.ggDx=-30.7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : calc(50% - ((37px + 0px) / 2) - 30.7%);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 3%;';
		hs+='visibility : hidden;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hideimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hideimage.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hideimage'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hideimage.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hideimage.ggCurrentLogicStateSize = newLogicStateSize;
				me._hideimage.style.transition='width 100ms ease 0ms, height 100ms ease 0ms, left 100ms ease 0ms';
				if (me._hideimage.ggCurrentLogicStateSize == 0) {
					me._hideimage.style.width='37px';
					me._hideimage.style.height='37px';
					me._hideimage.style.left = 'calc(50% - (37px / 2) - (0px / 2) + -30.7%)';
					setTimeout(function() {skin.updateSize(me._hideimage);}, 150);
				}
				else {
					me._hideimage.style.width='37px';
					me._hideimage.style.height='37px';
					me._hideimage.style.left = 'calc(50% - (37px / 2) - (0px / 2) + -30.7%)';
					setTimeout(function() {skin.updateSize(me._hideimage);}, 150);
				}
			}
		}
		me._hideimage.logicBlock_size();
		me._hideimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hideimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hideimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hideimage.style.transition='width 100ms ease 0ms, height 100ms ease 0ms, left 100ms ease 0ms';
				if (me._hideimage.ggCurrentLogicStateVisible == 0) {
					me._hideimage.style.visibility="hidden";
					me._hideimage.ggVisible=false;
				}
				else {
					me._hideimage.style.visibility=(Number(me._hideimage.style.opacity)>0||!me._hideimage.style.opacity)?'inherit':'hidden';
					me._hideimage.ggVisible=true;
				}
			}
		}
		me._hideimage.logicBlock_visible();
		me._hideimage.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menubottom.style.transition='none';
			} else {
				me._menubottom.style.transition='all 300ms ease 0ms';
			}
			me._menubottom.style.opacity='1';
			me._menubottom.style.visibility=me._menubottom.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._headerright.style.transition='none';
			} else {
				me._headerright.style.transition='all 300ms ease 0ms';
			}
			me._headerright.style.opacity='1';
			me._headerright.style.visibility=me._headerright.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._maps.style.transition='none';
			} else {
				me._maps.style.transition='all 300ms ease 0ms';
			}
			me._maps.style.opacity='1';
			me._maps.style.visibility=me._maps.ggVisible?'inherit':'hidden';
			if (me._maps.ggMapNotLoaded && me._maps.ggInitMap) {
				me._maps.ggInitMap(false);
				me._maps.ggInitMapMarkers(true);
			}
			if (player.transitionsDisabled) {
				me._btndrone.style.transition='none';
			} else {
				me._btndrone.style.transition='all 300ms ease 0ms';
			}
			me._btndrone.style.opacity='1';
			me._btndrone.style.visibility=me._btndrone.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._showimage.style.transition='none';
			} else {
				me._showimage.style.transition='all 300ms ease 0ms';
			}
			me._showimage.style.opacity='1';
			me._showimage.style.visibility=me._showimage.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._showimage.style.transition='none';
			} else {
				me._showimage.style.transition='all 300ms ease 0ms';
			}
			me._showimage.style.opacity='1';
			me._showimage.style.visibility=me._showimage.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._chatbotbuttoncontainer.style.transition='none';
			} else {
				me._chatbotbuttoncontainer.style.transition='all 300ms ease 0ms';
			}
			me._chatbotbuttoncontainer.style.opacity='1';
			me._chatbotbuttoncontainer.style.visibility=me._chatbotbuttoncontainer.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._hideimage.style.transition='none';
			} else {
				me._hideimage.style.transition='all 300ms ease 0ms';
			}
			me._hideimage.style.opacity='0';
			me._hideimage.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._g_compass.style.transition='none';
			} else {
				me._g_compass.style.transition='all 300ms ease-out 0ms';
			}
			me._g_compass.style.opacity='1';
			me._g_compass.style.visibility=me._g_compass.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._headerleft.style.transition='none';
			} else {
				me._headerleft.style.transition='all 300ms ease 0ms';
			}
			me._headerleft.style.opacity='1';
			me._headerleft.style.visibility=me._headerleft.ggVisible?'inherit':'hidden';
		}
		me._hideimage.onmouseenter=function (e) {
			me.elementMouseOver['hideimage']=true;
			me._hideimage.logicBlock_size();
		}
		me._hideimage.onmouseleave=function (e) {
			me.elementMouseOver['hideimage']=false;
			me._hideimage.logicBlock_size();
		}
		me._hideimage.ggUpdatePosition=function (useTransition) {
		}
		me._mapscontainer.appendChild(me._hideimage);
		me.divSkin.appendChild(me._mapscontainer);
		el=me._chatbotbuttoncontainer=document.createElement('div');
		el.ggId="chatbot-button-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container menu-scale chatbot-res";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6%;';
		hs+='height : 10%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='visibility : hidden;';
		hs+='width : 10%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chatbotbuttoncontainer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._chatbotbuttoncontainer.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._chatbotbuttoncontainer.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._chatbotbuttoncontainer.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._chatbotbuttoncontainer.style.transition='right 0s, bottom 0s, width 100ms ease 0ms, height 100ms ease 0ms';
				if (me._chatbotbuttoncontainer.ggCurrentLogicStatePosition == 0) {
					me._chatbotbuttoncontainer.style.right='5%';
					me._chatbotbuttoncontainer.style.bottom='14%';
				}
				else {
					me._chatbotbuttoncontainer.style.right='5%';
					me._chatbotbuttoncontainer.style.bottom='6%';
				}
			}
		}
		me._chatbotbuttoncontainer.logicBlock_position();
		me._chatbotbuttoncontainer.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['chatbotbuttoncontainer'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._chatbotbuttoncontainer.ggCurrentLogicStateSize != newLogicStateSize) {
				me._chatbotbuttoncontainer.ggCurrentLogicStateSize = newLogicStateSize;
				me._chatbotbuttoncontainer.style.transition='right 0s, bottom 0s, width 100ms ease 0ms, height 100ms ease 0ms';
				if (me._chatbotbuttoncontainer.ggCurrentLogicStateSize == 0) {
					me._chatbotbuttoncontainer.style.width='10.3%';
					me._chatbotbuttoncontainer.style.height='10.3%';
					setTimeout(function() {skin.updateSize(me._chatbotbuttoncontainer);}, 150);
				}
				else {
					me._chatbotbuttoncontainer.style.width='10%';
					me._chatbotbuttoncontainer.style.height='10%';
					setTimeout(function() {skin.updateSize(me._chatbotbuttoncontainer);}, 150);
				}
			}
		}
		me._chatbotbuttoncontainer.logicBlock_size();
		me._chatbotbuttoncontainer.onmouseenter=function (e) {
			me.elementMouseOver['chatbotbuttoncontainer']=true;
			me._chatbotbuttoncontainer.logicBlock_size();
		}
		me._chatbotbuttoncontainer.onmouseleave=function (e) {
			me.elementMouseOver['chatbotbuttoncontainer']=false;
			me._chatbotbuttoncontainer.logicBlock_size();
		}
		me._chatbotbuttoncontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._btnchatbot=document.createElement('div');
		el.ggId="btn-chatbot";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='position : absolute;';
		hs+='right : 7.81%;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 186px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btnchatbot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnchatbot.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._chatbotcontainer.style.transition='none';
			} else {
				me._chatbotcontainer.style.transition='all 300ms ease 0ms';
			}
			me._chatbotcontainer.style.opacity='1';
			me._chatbotcontainer.style.visibility=me._chatbotcontainer.ggVisible?'inherit':'hidden';
		}
		me._btnchatbot.ggUpdatePosition=function (useTransition) {
		}
		el=me._txtchatbot=document.createElement('div');
		els=me._txtchatbot__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt-chatbot";
		el.ggDy=-2.27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text txt-mobile-menu chatbot-txt-scale";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 56.8182%;';
		hs+='position : absolute;';
		hs+='right : 30.65%;';
		hs+='top : calc(50% - ((56.8182% + 0px) / 2) - 2.27%);';
		hs+='visibility : inherit;';
		hs+='width : 61.828%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 2px 3px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txtchatbot.ggUpdateText=function() {
			var params = [];
			var hs = player._("Chatbot", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txtchatbot.ggUpdateText();
		el.appendChild(els);
		me._txtchatbot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtchatbot.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._txtchatbot.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._txtchatbot.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._txtchatbot.style.transition='right 0s, top 0s';
				if (me._txtchatbot.ggCurrentLogicStatePosition == 0) {
					me._txtchatbot.style.right='0%';
					me._txtchatbot.style.top = 'calc(50% - (56.8182% / 2) - (0px / 2) + 75%)';
				}
				else {
					me._txtchatbot.style.right='30.65%';
					me._txtchatbot.style.top='calc(50% - ((56.8182% + 0px) / 2) - 2.27%)';
				}
			}
		}
		me._txtchatbot.logicBlock_position();
		me._txtchatbot.ggUpdatePosition=function (useTransition) {
		}
		me._btnchatbot.appendChild(me._txtchatbot);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		els.loading = 'lazy';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAADk0lEQVRogdVa0ZHaMBBdMfnwH3SAqOC4CkIqCKngSAdcBeEqCKkgUEFMBTEVBCo40QF8RX/KLKyIMLYky7KBN6NhBmRZT9p9u1rBlFJQBiYFB4AxAODnsLRjs9hQS1XC96VzLSLCpMBJzwHg440mX4YlAEyLCHXyXzApZgDw5w5JIF4AQDApxvkfLnaESbGgzo+AryrhiysitBPfHoSExrNKOPrPiQiTYgQAv+9iatWwQxFCn9E+MnuUmefQR+fHrxj8fUdpffd8EFdAtDRJVM6uR7+dSjj/QHHChR8oxyrhbZE4guIYhoHPlm59dA00rZFjvDeV8GnbJBD4TpVwXOi1o+uRSM/RaR5xbqFwzWF4FRBzWNvSgh'+
			'axcbyq5yJyF/Axax/TcoKcMuS5YeizeaBqPUUYZ8OkQKncAgCmDZmOuHlQ8B1T65MjuwTHi0gMaL3HRfkOpwlDLu74xoWbEilDn1rjeAhnJ+xsP8YisqzxrG+csipXFCIq4RMAGADAKwCsAODgeGRFfQcq4WmMOQT5CEkmtr1WJ9L6uV5h6jOiltGK7ovUjEnRM2oDaZniRSdiJnJMClz9lFqmMwEitqB2BWPyWo5NRWuNiKn7XToevxCxLU2kzKZHtPJR1SyUiC0ePNUMskFlp3uU36CU6R6JVPYPqEFkG/icD4IOcKFEJh6xIgTbMpVzIYgI6TyvEABdWFHBbRh6kAtOGumFZgAcGgFw5FA2LdGZqzhtwHpuwXJQeTkeYIur5PGS64FPxDS5s7mohGeB49nmuUYie8fqDW5RQTFBRetfli7Ljofc3bSKQqmMqxIq'+
			'cEem+lRnwZrMA3dmU2TTeIQNNZvcODoh7ZFZTjxOls9VS6YuoHpxH+dlUkwpWax7D3MsmXbI/uscjEx0XbkS2juTQpAVxLhMOgqJWY1vIsCdgSbDpEjJaWNlvjvtw0citCvTSIMX+c+URMVWjA7BWJtx/uoNHetnnZFVwpkxHqetb+I+8uLq7SJFoR++1DCz83PGLsQmge/4ZJKAolyLigG4km+uEkwBUvKFjJw5ZkHuQHPiRTJv/cMA/E81xqTrNkXSZ/Q0gICuSIqSND5zxSgnkSpgUmwqHHOX+YJFHUQrmVJx2kXioDPm2PcuTdd+TeA95Kypi6M2iBxI72vnYTY0XXxYl6lMbDRFBHfhVSV81NYdZBOmVfpXpCYRkwjqP0bcxs3oCgDwD3tdWyJaXGj4AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.right='5%';
					me._image_3.style.top = 'calc(50% - (40px / 2) - (0px / 2) + 5%)';
				}
				else {
					me._image_3.style.right='0%';
					me._image_3.style.top='calc(50% - ((40px + 0px) / 2) + 0%)';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_3.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_3.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_3.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._image_3.ggCurrentLogicStateSize == 0) {
					me._image_3.style.width='30px';
					me._image_3.style.height='30px';
					me._image_3.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._image_3);
				}
				else {
					me._image_3.style.width='40px';
					me._image_3.style.height='40px';
					me._image_3.style.top = 'calc(50% - (40px / 2))';
					skin.updateSize(me._image_3);
				}
			}
		}
		me._image_3.logicBlock_size();
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._btnchatbot.appendChild(me._image_3);
		me._chatbotbuttoncontainer.appendChild(me._btnchatbot);
		me.divSkin.appendChild(me._chatbotbuttoncontainer);
		el=me._containershowhidemobile=document.createElement('div');
		el.ggId="container-show-hide-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containershowhidemobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._containershowhidemobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._containershowhidemobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._containershowhidemobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._containershowhidemobile.style.transition='';
				if (me._containershowhidemobile.ggCurrentLogicStateVisible == 0) {
					me._containershowhidemobile.style.visibility="hidden";
					me._containershowhidemobile.ggVisible=false;
				}
				else {
					me._containershowhidemobile.style.visibility="hidden";
					me._containershowhidemobile.ggVisible=false;
				}
			}
		}
		me._containershowhidemobile.logicBlock_visible();
		me._containershowhidemobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._showmobile=document.createElement('div');
		els=me._showmobile__img=document.createElement('img');
		els.className='ggskin ggskin_showmobile';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="show-mobile";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 53px;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((53px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._showmobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._showmobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._showmobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._showmobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._showmobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._showmobile.ggCurrentLogicStatePosition == 0) {
					me._showmobile.style.right='0%';
					me._showmobile.style.top = 'calc(50% - (53px / 2))';
				}
				else {
					me._showmobile.style.right='0%';
					me._showmobile.style.top='calc(50% - ((53px + 0px) / 2) + 0%)';
				}
			}
		}
		me._showmobile.logicBlock_position();
		me._showmobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._showmobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me._showmobile.ggCurrentLogicStateSize = newLogicStateSize;
				me._showmobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._showmobile.ggCurrentLogicStateSize == 0) {
					me._showmobile.style.width='30px';
					me._showmobile.style.height='30px';
					me._showmobile.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._showmobile);
				}
				else {
					me._showmobile.style.width='53px';
					me._showmobile.style.height='53px';
					me._showmobile.style.top = 'calc(50% - (53px / 2))';
					skin.updateSize(me._showmobile);
				}
			}
		}
		me._showmobile.logicBlock_size();
		me._showmobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._showmobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._showmobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._showmobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._showmobile.ggCurrentLogicStateVisible == 0) {
					me._showmobile.style.visibility=(Number(me._showmobile.style.opacity)>0||!me._showmobile.style.opacity)?'inherit':'hidden';
					me._showmobile.ggVisible=true;
				}
				else {
					me._showmobile.style.visibility="hidden";
					me._showmobile.ggVisible=false;
				}
			}
		}
		me._showmobile.logicBlock_visible();
		me._showmobile.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._menubottom.style.transition='none';
			} else {
				me._menubottom.style.transition='all 300ms ease 0ms';
			}
			me._menubottom.style.opacity='1';
			me._menubottom.style.visibility=me._menubottom.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._headerright.style.transition='none';
			} else {
				me._headerright.style.transition='all 300ms ease 0ms';
			}
			me._headerright.style.opacity='1';
			me._headerright.style.visibility=me._headerright.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._maps.style.transition='none';
			} else {
				me._maps.style.transition='all 300ms ease 0ms';
			}
			me._maps.style.opacity='1';
			me._maps.style.visibility=me._maps.ggVisible?'inherit':'hidden';
			if (me._maps.ggMapNotLoaded && me._maps.ggInitMap) {
				me._maps.ggInitMap(false);
				me._maps.ggInitMapMarkers(true);
			}
			if (player.transitionsDisabled) {
				me._btndrone.style.transition='none';
			} else {
				me._btndrone.style.transition='all 300ms ease 0ms';
			}
			me._btndrone.style.opacity='1';
			me._btndrone.style.visibility=me._btndrone.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._showimage.style.transition='none';
			} else {
				me._showimage.style.transition='all 300ms ease 0ms';
			}
			me._showimage.style.opacity='1';
			me._showimage.style.visibility=me._showimage.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._showimage.style.transition='none';
			} else {
				me._showimage.style.transition='all 300ms ease 0ms';
			}
			me._showimage.style.opacity='1';
			me._showimage.style.visibility=me._showimage.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._chatbotbuttoncontainer.style.transition='none';
			} else {
				me._chatbotbuttoncontainer.style.transition='all 300ms ease 0ms';
			}
			me._chatbotbuttoncontainer.style.opacity='1';
			me._chatbotbuttoncontainer.style.visibility=me._chatbotbuttoncontainer.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._hideimage.style.transition='none';
			} else {
				me._hideimage.style.transition='all 300ms ease 0ms';
			}
			me._hideimage.style.opacity='0';
			me._hideimage.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._g_compass.style.transition='none';
			} else {
				me._g_compass.style.transition='all 300ms ease-out 0ms';
			}
			me._g_compass.style.opacity='1';
			me._g_compass.style.visibility=me._g_compass.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._showmobile.style.transition='none';
			} else {
				me._showmobile.style.transition='all 500ms ease-out 0ms';
			}
			me._showmobile.style.opacity='0';
			me._showmobile.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._hidemobile.style.transition='none';
			} else {
				me._hidemobile.style.transition='all 500ms ease-out 0ms';
			}
			me._hidemobile.style.opacity='1';
			me._hidemobile.style.visibility=me._hidemobile.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._headerleft.style.transition='none';
			} else {
				me._headerleft.style.transition='all 300ms ease 0ms';
			}
			me._headerleft.style.opacity='1';
			me._headerleft.style.visibility=me._headerleft.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._mobile.style.transition='none';
			} else {
				me._mobile.style.transition='all 300ms ease 0ms';
			}
			me._mobile.style.opacity='1';
			me._mobile.style.visibility=me._mobile.ggVisible?'inherit':'hidden';
		}
		me._showmobile.ggUpdatePosition=function (useTransition) {
		}
		me._containershowhidemobile.appendChild(me._showmobile);
		el=me._hidemobile=document.createElement('div');
		els=me._hidemobile__img=document.createElement('img');
		els.className='ggskin ggskin_hidemobile';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hide-mobile";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 53px;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((53px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hidemobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hidemobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._hidemobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._hidemobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._hidemobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._hidemobile.ggCurrentLogicStatePosition == 0) {
					me._hidemobile.style.right='0%';
					me._hidemobile.style.top = 'calc(50% - (53px / 2))';
				}
				else {
					me._hidemobile.style.right='0%';
					me._hidemobile.style.top='calc(50% - ((53px + 0px) / 2) + 0%)';
				}
			}
		}
		me._hidemobile.logicBlock_position();
		me._hidemobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hidemobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hidemobile.ggCurrentLogicStateSize = newLogicStateSize;
				me._hidemobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._hidemobile.ggCurrentLogicStateSize == 0) {
					me._hidemobile.style.width='30px';
					me._hidemobile.style.height='30px';
					me._hidemobile.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._hidemobile);
				}
				else {
					me._hidemobile.style.width='53px';
					me._hidemobile.style.height='53px';
					me._hidemobile.style.top = 'calc(50% - (53px / 2))';
					skin.updateSize(me._hidemobile);
				}
			}
		}
		me._hidemobile.logicBlock_size();
		me._hidemobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hidemobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hidemobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hidemobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._hidemobile.ggCurrentLogicStateVisible == 0) {
					me._hidemobile.style.visibility=(Number(me._hidemobile.style.opacity)>0||!me._hidemobile.style.opacity)?'inherit':'hidden';
					me._hidemobile.ggVisible=true;
				}
				else {
					me._hidemobile.style.visibility="hidden";
					me._hidemobile.ggVisible=false;
				}
			}
		}
		me._hidemobile.logicBlock_visible();
		me._hidemobile.onclick=function (e) {
			me._menubottom.style.transition='none';
			me._menubottom.style.opacity='0';
			me._menubottom.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._headerright.style.transition='none';
			} else {
				me._headerright.style.transition='all 300ms ease 0ms';
			}
			me._headerright.style.opacity='0';
			me._headerright.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._maps.style.transition='none';
			} else {
				me._maps.style.transition='all 300ms ease 0ms';
			}
			me._maps.style.opacity='0';
			me._maps.style.visibility='hidden';
			if (me._maps.ggClearMap) me._maps.ggClearMap();
			if (player.transitionsDisabled) {
				me._btndrone.style.transition='none';
			} else {
				me._btndrone.style.transition='all 300ms ease 0ms';
			}
			me._btndrone.style.opacity='0';
			me._btndrone.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._showimage.style.transition='none';
			} else {
				me._showimage.style.transition='all 300ms ease 0ms';
			}
			me._showimage.style.opacity='0';
			me._showimage.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._chatbotbuttoncontainer.style.transition='none';
			} else {
				me._chatbotbuttoncontainer.style.transition='all 300ms ease 0ms';
			}
			me._chatbotbuttoncontainer.style.opacity='0';
			me._chatbotbuttoncontainer.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._hideimage.style.transition='none';
			} else {
				me._hideimage.style.transition='all 300ms ease 0ms';
			}
			me._hideimage.style.opacity='1';
			me._hideimage.style.visibility=me._hideimage.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._g_compass.style.transition='none';
			} else {
				me._g_compass.style.transition='all 300ms ease 0ms';
			}
			me._g_compass.style.opacity='0';
			me._g_compass.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._hidemobile.style.transition='none';
			} else {
				me._hidemobile.style.transition='all 500ms ease-out 0ms';
			}
			me._hidemobile.style.opacity='0';
			me._hidemobile.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._showmobile.style.transition='none';
			} else {
				me._showmobile.style.transition='all 500ms ease-out 0ms';
			}
			me._showmobile.style.opacity='1';
			me._showmobile.style.visibility=me._showmobile.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._headerleft.style.transition='none';
			} else {
				me._headerleft.style.transition='all 300ms ease 0ms';
			}
			me._headerleft.style.opacity='0';
			me._headerleft.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mobile.style.transition='none';
			} else {
				me._mobile.style.transition='all 300ms ease 0ms';
			}
			me._mobile.style.opacity='0';
			me._mobile.style.visibility='hidden';
		}
		me._hidemobile.ggUpdatePosition=function (useTransition) {
		}
		me._containershowhidemobile.appendChild(me._hidemobile);
		me.divSkin.appendChild(me._containershowhidemobile);
		el=me._chatbotcontainer=document.createElement('div');
		el.ggId="chatbot-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container menu-scale";
		el.ggType='container';
		hs ='';
		hs+='bottom : 4.72%;';
		hs+='height : 445px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 3%;';
		hs+='visibility : hidden;';
		hs+='width : 321px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chatbotcontainer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._chatbotcontainer.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._chatbotcontainer.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._chatbotcontainer.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._chatbotcontainer.style.transition='right 0s, bottom 0s';
				if (me._chatbotcontainer.ggCurrentLogicStatePosition == 0) {
					me._chatbotcontainer.style.right='12%';
					me._chatbotcontainer.style.bottom='4.72%';
				}
				else {
					me._chatbotcontainer.style.right='3%';
					me._chatbotcontainer.style.bottom='4.72%';
				}
			}
		}
		me._chatbotcontainer.logicBlock_position();
		me._chatbotcontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._chatbotbg=document.createElement('div');
		el.ggId="chatbot-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chatbotbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._chatbotbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._popupchatbot=document.createElement('div');
		els=me._popupchatbot__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="popup-chatbot";
		el.ggDx=0.03;
		el.ggDy=-0.23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.03%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 0.23%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._popupchatbot.ggUpdateText=function() {
			var params = [];
			var hs = player._("  <iframe\n    src=\"https:\/\/www.chatbase.co\/chatbot-iframe\/ld0-XDhWz-2tI29Pd2JeU\"\n    width=\"100%\"\n    style=\"height: 100%; min-height: 100%;\"\n    frameborder=\"0\"\n><\/iframe>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._popupchatbot.ggUpdateText();
		el.appendChild(els);
		me._popupchatbot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popupchatbot.ggUpdatePosition=function (useTransition) {
		}
		me._chatbotbg.appendChild(me._popupchatbot);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0.12%;';
		hs+='top : -0.01%;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=27;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #2f2f2f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 27%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 40%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("X", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._chatbotcontainer.style.transition='none';
			} else {
				me._chatbotcontainer.style.transition='all 300ms ease 0ms';
			}
			me._chatbotcontainer.style.opacity='0';
			me._chatbotcontainer.style.visibility='hidden';
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._text_2);
		me._chatbotbg.appendChild(me._rectangle_2);
		me._chatbotcontainer.appendChild(me._chatbotbg);
		me.divSkin.appendChild(me._chatbotcontainer);
		el=me._menubottom=document.createElement('div');
		el.ggId="Menu-Bottom";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container bottom-menu";
		el.ggType='container';
		hs ='';
		hs+='bottom : -0.09%;';
		hs+='height : 288px;';
		hs+='left : calc(50% - ((1349px + 0px) / 2) + 0%);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 1349px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menubottom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menubottom.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_kategori=document.createElement('div');
		els=me._button_kategori__img=document.createElement('img');
		els.className='ggskin ggskin_button_kategori';
		els.loading = 'lazy';
		hs=basePath + 'images/button_kategori.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button Kategori";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image category-btn";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 165px;';
		hs+='left : calc(50% - ((187px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((165px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_kategori.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_kategori.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_kategori.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_kategori.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_kategori.style.transition='left 0s, top 0s, width 0s, height 0s, transform 300ms ease-in-out 0ms';
				if (me._button_kategori.ggCurrentLogicStatePosition == 0) {
					me._button_kategori.style.left = 'calc(50% - (187px / 2))';
					me._button_kategori.style.top = 'calc(50% - (165px / 2) - (0px / 2) + -22%)';
				}
				else {
					me._button_kategori.style.left='calc(50% - ((187px + 0px) / 2) + 0%)';
					me._button_kategori.style.top='calc(50% - ((165px + 0px) / 2) + 0%)';
				}
			}
		}
		me._button_kategori.logicBlock_position();
		me._button_kategori.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_kategori.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_kategori.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_kategori.style.transition='left 0s, top 0s, width 0s, height 0s, transform 300ms ease-in-out 0ms';
				if (me._button_kategori.ggCurrentLogicStateSize == 0) {
					me._button_kategori.style.width='116px';
					me._button_kategori.style.height='100px';
					me._button_kategori.style.left = 'calc(50% - (116px / 2))';
					me._button_kategori.style.top = 'calc(50% - (100px / 2))';
					skin.updateSize(me._button_kategori);
				}
				else {
					me._button_kategori.style.width='187px';
					me._button_kategori.style.height='165px';
					me._button_kategori.style.left = 'calc(50% - (187px / 2))';
					me._button_kategori.style.top = 'calc(50% - (165px / 2))';
					skin.updateSize(me._button_kategori);
				}
			}
		}
		me._button_kategori.logicBlock_size();
		me._button_kategori.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['button_kategori'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._button_kategori.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_kategori.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_kategori.style.transition='left 0s, top 0s, width 0s, height 0s, transform 300ms ease-in-out 0ms';
				if (me._button_kategori.ggCurrentLogicStateScaling == 0) {
					me._button_kategori.ggParameter.sx = 1.03;
					me._button_kategori.ggParameter.sy = 1.03;
					me._button_kategori.style.transform=parameterToTransform(me._button_kategori.ggParameter);
					setTimeout(function() {skin.updateSize(me._button_kategori);}, 350);
				}
				else {
					me._button_kategori.ggParameter.sx = 1;
					me._button_kategori.ggParameter.sy = 1;
					me._button_kategori.style.transform=parameterToTransform(me._button_kategori.ggParameter);
					setTimeout(function() {skin.updateSize(me._button_kategori);}, 350);
				}
			}
		}
		me._button_kategori.logicBlock_scaling();
		me._button_kategori.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_kategori.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_kategori.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_kategori.style.transition='left 0s, top 0s, width 0s, height 0s, transform 300ms ease-in-out 0ms';
				if (me._button_kategori.ggCurrentLogicStateVisible == 0) {
					me._button_kategori.style.visibility="hidden";
					me._button_kategori.ggVisible=false;
				}
				else {
					me._button_kategori.style.visibility=(Number(me._button_kategori.style.opacity)>0||!me._button_kategori.style.opacity)?'inherit':'hidden';
					me._button_kategori.ggVisible=true;
				}
			}
		}
		me._button_kategori.logicBlock_visible();
		me._button_kategori.onclick=function (e) {
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/kategori-id.html\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
		}
		me._button_kategori.onmouseenter=function (e) {
			me.elementMouseOver['button_kategori']=true;
			me._button_kategori.logicBlock_scaling();
		}
		me._button_kategori.onmouseleave=function (e) {
			me.elementMouseOver['button_kategori']=false;
			me._button_kategori.logicBlock_scaling();
		}
		me._button_kategori.ggUpdatePosition=function (useTransition) {
		}
		me._menubottom.appendChild(me._button_kategori);
		el=me._recright=document.createElement('div');
		els=me._recright__img=document.createElement('img');
		els.className='ggskin ggskin_recright';
		els.loading = 'lazy';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg8AAAAQCAYAAACROpzFAAAACXBIWXMAAAsSAAALEgHS3X78AAAD6ElEQVR4nO2dS24TQRRFrxOQEALRBIkw4GOGjDCMkcgOgBXgrACzAvAOyAowO0h2kOzAGTFA4huQAAHhG0URGJX0Sio9Vbmrq7v9ad8jlVz9+uPn8uDern4ut0ajEQipmTaAfWmEEELmnCV+gaQm7gLYBGDc6SsA36RvYl0OOiGEzC+ceWg2XbnrN2xLq5sMwADAnZz32RGDUfdsRCbjkMm2ye11/cNACCHNheahmRixfAzgivp0WwB6keJpTYAruoOI84YArkeO6i6AtRwDkZpHJp/VtDNq3zMZH5oIQghJgOahWYRMgyZPPDOZpdAmYD1HuM01HxUc0Q0R+Crz6Eku2jRoaCIIISQBmofZop0oZLGmQdMH8E'+
			'Td+YcE2xIS7kxyzxNsH2c9sw8peaSOQ1ET0ZY2ZBEoIWQRoXnwcx7AquxpSXP7N51+SwpPbf8igEsAlp19brsl/WXnVfdjSRVLl+9iILZFEHsRjx1Cwv00MQd9vTzjYNmQAsxMPkOZcUABE2FnWEZOg9qepVgot+cAfqiY79xJx+DJ2xf7BOCjZ78+dhqxmBy+SiGxPsZ3rVmMHQL44omTBWDWzcNpafCIOEQslgJCfg7AiiPMLSXo15Ro+4Q89FrVManmIVZc6+SG3HlbUh5ZWPpyvmUzouCyTu5JDiGaYh6YL8d8kb+bIwC/PMdgijFfruNihypfnXtK7J/nPOjYMc8OH8vOsfou3HDKcwdut08AOOncebeUoK9OQKR9sXmmM2XjAKeAsQraNV47hW6OeSCE1MfnmsV7vwKBHRc7APBXjU5QhCPjbuxICfxUcA3B'+
			'UmAa3m6bY497puF9hkBP2VsD4RN0UpymPWeftYJFFlAuLgfO919GrNxtN/YHwPuaRMvypoBYpcQ+eM4hC4Y1DyOPU5oV7KML32MLXz2C21+RxxfjTFFo+4K0UO1CyECZ18tS91AXQ5lar+I5P6TuYSgzGjEFj7vqkQVKCq4+11z7duS5uzJTUcU4wKl7mBbvALyV9y4yfRkb25OGGkTL9H8CeFFSqMYd+xvAy8A5hJAJwYLJ+ads0aT+xUVe4WNobYaqf21hCijvF8ij7DjwZ5uEEBIJHxvMPwOpGViX6cpYjFheFcF0hXsg1/IxblGnfTEhRekHrteVHGPzsOPwUGZSio5Dl8aBEELi4MxD88i7A49dZVLPQMSsBomEFSY7OcfoGYjYVSlDq0taONNACCGJ0Dw0F20idmS7yP9bdJxfPsQuiBT73xZbkmPMNdecfp'+
			'GFmTL5zA+cGE0DIYSUhOah+XQ8xY2TYE3u/LWJ2HIWpZokmVOXQQghJBUA/wHry2/h6ZgYLwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rec-right";
		el.ggDx=20.35;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image right-mobile rec-scale";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((333px + 0px) / 2) + 20.35%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 333px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._recright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._recright.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._recright.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._recright.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._recright.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._recright.ggCurrentLogicStatePosition == 0) {
					me._recright.style.left = 'calc(50% - (333px / 2) - (0px / 2) + 70%)';
					me._recright.style.top = 'calc(50% - (13px / 2))';
				}
				else {
					me._recright.style.left='calc(50% - ((333px + 0px) / 2) + 20.35%)';
					me._recright.style.top='calc(50% - ((13px + 0px) / 2) + 0%)';
				}
			}
		}
		me._recright.logicBlock_position();
		me._recright.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._recright.ggCurrentLogicStateSize != newLogicStateSize) {
				me._recright.ggCurrentLogicStateSize = newLogicStateSize;
				me._recright.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._recright.ggCurrentLogicStateSize == 0) {
					me._recright.style.width='160px';
					me._recright.style.height='10px';
					me._recright.style.left = 'calc(50% - (160px / 2) - (0px / 2) + 20.35%)';
					me._recright.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._recright);
				}
				else {
					me._recright.style.width='333px';
					me._recright.style.height='13px';
					me._recright.style.left = 'calc(50% - (333px / 2) - (0px / 2) + 20.35%)';
					me._recright.style.top = 'calc(50% - (13px / 2))';
					skin.updateSize(me._recright);
				}
			}
		}
		me._recright.logicBlock_size();
		me._recright.ggUpdatePosition=function (useTransition) {
		}
		me._menubottom.appendChild(me._recright);
		el=me._recleft=document.createElement('div');
		els=me._recleft__img=document.createElement('img');
		els.className='ggskin ggskin_recleft';
		els.loading = 'lazy';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg8AAAAQCAYAAACROpzFAAAACXBIWXMAAAsSAAALEgHS3X78AAAD3ElEQVR4nO2dXW7UMBSFzyCg/IoIBAiBYOCNJ2YHzBLYAbACugPaFdAldHbQHdDywuvAAy8g0RGiL/x0RpUqitQGGd1IxjiO7XiS+TmfZDW54zg3TtVzxondTp7nIIQQMvdkUnZ5K8m0OcUeJoSQ2ijR7gPoNtyV6pxbANS3wH0An2V7COBZC7e1JzllLZybNAhHHgghJB4lkqtSrkgrAwBrgSMAfW172/OYTQBPK+q8k7bHHu1lIv6heUCO2wDwWPYnsr/heW4yZ9A8EEJIODbTYDKQz6vE0zQBA49RAx/jUOBjIDIxC48C8+iKUSrLhSZiQaF5IIQQf3xMg06VeJaZAJdwq3O/CrxnrvZsxqHquEyuydfA0E'+
			'QsGDQPhJBlJZNvzkOP6w81DSaFeK5p8arRgzLhHkfmcN/yKMVlHGx5pOqHUBPR87xPpCFoHghpjxsAblrO3kkUuyVFj+uf27ZDYncA3Nb2O5bj68TuSrG11UkUe2O8b2BjrYZYmoxENF1irWMaCJXr68hzrxvmBSLIvrnsiIin6AebmXKhhOoEwHHAz6Ku6u8Psu0quRyTa3UOAHySWK59Vravbx8C+Krtw7Jti6lyBOBHgn6eGjQPy801ACuWHkglXkoYz1nidUWrQAnXeYuoIFFMCdeFCJHyqTNLsWXOt8o8xDwiSI3+O6/E9mVk+zuWa21bAJ7LCEwVdczDrNRpKq8jMT3HKDdFesmNNn6XmKSijiI/3d7vzF/Oys9UYmXGLgaIUtXntliWWKzM2PUFEqh5vQay3HDK4XRh/4ZzqJkDmyH46Rgl+aWZA5SMeHih'+
			'mwfzj2WZoJn1U8VWpiTAvrHYNgouATiTWMgIIe2ylfCRRQyTBtpv69pGnqMOs8p3AN8c3/A/Oh5x7GvvfNgeW+zN+sXr5sEcvmp6OOug4fORf7ksBSXGZdZjV6U0YXSnEVPm84G2bxrUWY8pAXpouS/zzlBeqqzzkmDBSFv/oSfbrvYmlscM2zUeW9jWbehLvCqPVcm7mJp5LzIHaP2Qyjh8kdxO8P8wvNp+63hXYU8TalPEFe8T5bhw8J0HQgjxI3amQSG+plj2HMJdGAfbDIPdSPG2zbaIySO2H1KbBtIiXJ6aEEL8GIv4dWXmQtUjhYnU65YI5lCE2WzHZRwgsxRCGThWvAzNI7QfRvJiZFk/kDmEIw+EEBKH6xv4esBaBj3DEKx6rGmQeoXJ2DzgWGWSIw0LDM0DIYTUI5O1GIqZA5sN/WdLJfQvKuqo6ZlPGl'+
			'rVsautSbFL07DY0DwQQsj80pcRgr4x+rEj4k0BJ+kB8AfOD57oU3bnBAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rec-left";
		el.ggDx=-20.35;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image left-mobile rec-scale";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((333px + 0px) / 2) - 20.35%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 333px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._recleft.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._recleft.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._recleft.ggCurrentLogicStateSize != newLogicStateSize) {
				me._recleft.ggCurrentLogicStateSize = newLogicStateSize;
				me._recleft.style.transition='width 0s, height 0s';
				if (me._recleft.ggCurrentLogicStateSize == 0) {
					me._recleft.style.width='160px';
					me._recleft.style.height='10px';
					me._recleft.style.left = 'calc(50% - (160px / 2) - (0px / 2) + -20.35%)';
					me._recleft.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._recleft);
				}
				else {
					me._recleft.style.width='333px';
					me._recleft.style.height='13px';
					me._recleft.style.left = 'calc(50% - (333px / 2) - (0px / 2) + -20.35%)';
					me._recleft.style.top = 'calc(50% - (13px / 2))';
					skin.updateSize(me._recleft);
				}
			}
		}
		me._recleft.logicBlock_size();
		me._recleft.ggUpdatePosition=function (useTransition) {
		}
		me._menubottom.appendChild(me._recleft);
		el=me._icon_discover=document.createElement('div');
		el.ggId="Icon + Discover";
		el.ggDx=411;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container icon-discover-container";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((174px + 0px) / 2) + 411px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 174px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._icon_discover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._icon_discover.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['icon_discover'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._icon_discover.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._icon_discover.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._icon_discover.style.transition='transform 300ms ease 0ms';
				if (me._icon_discover.ggCurrentLogicStateScaling == 0) {
					me._icon_discover.ggParameter.sx = 1.03;
					me._icon_discover.ggParameter.sy = 1.03;
					me._icon_discover.style.transform=parameterToTransform(me._icon_discover.ggParameter);
					setTimeout(function() {skin.updateSize(me._icon_discover);}, 350);
				}
				else {
					me._icon_discover.ggParameter.sx = 1;
					me._icon_discover.ggParameter.sy = 1;
					me._icon_discover.style.transform=parameterToTransform(me._icon_discover.ggParameter);
					setTimeout(function() {skin.updateSize(me._icon_discover);}, 350);
				}
			}
		}
		me._icon_discover.logicBlock_scaling();
		me._icon_discover.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._icon_discover.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._icon_discover.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._icon_discover.style.transition='transform 300ms ease 0ms';
				if (me._icon_discover.ggCurrentLogicStateVisible == 0) {
					me._icon_discover.style.visibility="hidden";
					me._icon_discover.ggVisible=false;
				}
				else {
					me._icon_discover.style.visibility=(Number(me._icon_discover.style.opacity)>0||!me._icon_discover.style.opacity)?'inherit':'hidden';
					me._icon_discover.ggVisible=true;
				}
			}
		}
		me._icon_discover.logicBlock_visible();
		me._icon_discover.onclick=function (e) {
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/discover.html?disc=3&lang=id\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
		}
		me._icon_discover.onmouseenter=function (e) {
			me.elementMouseOver['icon_discover']=true;
			me._icon_discover.logicBlock_scaling();
		}
		me._icon_discover.onmouseleave=function (e) {
			me.elementMouseOver['icon_discover']=false;
			me._icon_discover.logicBlock_scaling();
		}
		me._icon_discover.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_discover=document.createElement('div');
		els=me._text_discover__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text Discover";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 132px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_discover.ggUpdateText=function() {
			var params = [];
			var hs = player._("Jelajah", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_discover.ggUpdateText();
		el.appendChild(els);
		me._text_discover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_discover.ggUpdatePosition=function (useTransition) {
		}
		me._icon_discover.appendChild(me._text_discover);
		el=me._image_discover=document.createElement('div');
		els=me._image_discover__img=document.createElement('img');
		els.className='ggskin ggskin_image_discover';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image Discover";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button icon-menu";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_discover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_discover.ggUpdatePosition=function (useTransition) {
		}
		me._icon_discover.appendChild(me._image_discover);
		me._menubottom.appendChild(me._icon_discover);
		el=me._icon_info=document.createElement('div');
		el.ggId="Icon + Info";
		el.ggDx=204;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container icon-info-container";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((169px + 0px) / 2) + 204px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._icon_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._icon_info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['icon_info'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._icon_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._icon_info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._icon_info.style.transition='transform 300ms ease 0ms';
				if (me._icon_info.ggCurrentLogicStateScaling == 0) {
					me._icon_info.ggParameter.sx = 1.03;
					me._icon_info.ggParameter.sy = 1.03;
					me._icon_info.style.transform=parameterToTransform(me._icon_info.ggParameter);
					setTimeout(function() {skin.updateSize(me._icon_info);}, 350);
				}
				else {
					me._icon_info.ggParameter.sx = 1;
					me._icon_info.ggParameter.sy = 1;
					me._icon_info.style.transform=parameterToTransform(me._icon_info.ggParameter);
					setTimeout(function() {skin.updateSize(me._icon_info);}, 350);
				}
			}
		}
		me._icon_info.logicBlock_scaling();
		me._icon_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._icon_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._icon_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._icon_info.style.transition='transform 300ms ease 0ms';
				if (me._icon_info.ggCurrentLogicStateVisible == 0) {
					me._icon_info.style.visibility="hidden";
					me._icon_info.ggVisible=false;
				}
				else {
					me._icon_info.style.visibility=(Number(me._icon_info.style.opacity)>0||!me._icon_info.style.opacity)?'inherit':'hidden';
					me._icon_info.ggVisible=true;
				}
			}
		}
		me._icon_info.logicBlock_visible();
		me._icon_info.onclick=function (e) {
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/informasi.html?info=6&lang=id\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
		}
		me._icon_info.onmouseenter=function (e) {
			me.elementMouseOver['icon_info']=true;
			me._icon_info.logicBlock_scaling();
		}
		me._icon_info.onmouseleave=function (e) {
			me.elementMouseOver['icon_info']=false;
			me._icon_info.logicBlock_scaling();
		}
		me._icon_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_info=document.createElement('div');
		els=me._text_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text Info";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 132px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_info.ggUpdateText=function() {
			var params = [];
			var hs = player._("Informasi", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_info.ggUpdateText();
		el.appendChild(els);
		me._text_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_info.ggUpdatePosition=function (useTransition) {
		}
		me._icon_info.appendChild(me._text_info);
		el=me._image_info=document.createElement('div');
		els=me._image_info__img=document.createElement('img');
		els.className='ggskin ggskin_image_info';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image Info";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button icon-menu";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_info.ggUpdatePosition=function (useTransition) {
		}
		me._icon_info.appendChild(me._image_info);
		me._menubottom.appendChild(me._icon_info);
		el=me._icon_public=document.createElement('div');
		el.ggId="Icon + Public";
		el.ggDx=-198;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container icon-public-container";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((193px + 0px) / 2) - 198px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 193px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._icon_public.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._icon_public.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['icon_public'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._icon_public.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._icon_public.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._icon_public.style.transition='transform 300ms ease 0ms';
				if (me._icon_public.ggCurrentLogicStateScaling == 0) {
					me._icon_public.ggParameter.sx = 1.03;
					me._icon_public.ggParameter.sy = 1.03;
					me._icon_public.style.transform=parameterToTransform(me._icon_public.ggParameter);
					setTimeout(function() {skin.updateSize(me._icon_public);}, 350);
				}
				else {
					me._icon_public.ggParameter.sx = 1;
					me._icon_public.ggParameter.sy = 1;
					me._icon_public.style.transform=parameterToTransform(me._icon_public.ggParameter);
					setTimeout(function() {skin.updateSize(me._icon_public);}, 350);
				}
			}
		}
		me._icon_public.logicBlock_scaling();
		me._icon_public.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._icon_public.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._icon_public.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._icon_public.style.transition='transform 300ms ease 0ms';
				if (me._icon_public.ggCurrentLogicStateVisible == 0) {
					me._icon_public.style.visibility="hidden";
					me._icon_public.ggVisible=false;
				}
				else {
					me._icon_public.style.visibility=(Number(me._icon_public.style.opacity)>0||!me._icon_public.style.opacity)?'inherit':'hidden';
					me._icon_public.ggVisible=true;
				}
			}
		}
		me._icon_public.logicBlock_visible();
		me._icon_public.onclick=function (e) {
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/publicservice.php?lang=id\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
		}
		me._icon_public.onmouseenter=function (e) {
			me.elementMouseOver['icon_public']=true;
			me._icon_public.logicBlock_scaling();
		}
		me._icon_public.onmouseleave=function (e) {
			me.elementMouseOver['icon_public']=false;
			me._icon_public.logicBlock_scaling();
		}
		me._icon_public.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_public=document.createElement('div');
		els=me._text_public__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text Public";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 152px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_public.ggUpdateText=function() {
			var params = [];
			var hs = player._("Layanan Publik", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_public.ggUpdateText();
		el.appendChild(els);
		me._text_public.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_public.ggUpdatePosition=function (useTransition) {
		}
		me._icon_public.appendChild(me._text_public);
		el=me._image_public=document.createElement('div');
		els=me._image_public__img=document.createElement('img');
		els.className='ggskin ggskin_image_public';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image Public";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button icon-menu";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_public.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_public.ggUpdatePosition=function (useTransition) {
		}
		me._icon_public.appendChild(me._image_public);
		me._menubottom.appendChild(me._icon_public);
		el=me._icon_menu=document.createElement('div');
		el.ggId="Icon + Menu";
		el.ggDx=-405;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container icon-menu-container";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((112px + 0px) / 2) - 405px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._icon_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._icon_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['icon_menu'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._icon_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._icon_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._icon_menu.style.transition='transform 300ms ease 0ms';
				if (me._icon_menu.ggCurrentLogicStateScaling == 0) {
					me._icon_menu.ggParameter.sx = 1.03;
					me._icon_menu.ggParameter.sy = 1.03;
					me._icon_menu.style.transform=parameterToTransform(me._icon_menu.ggParameter);
					setTimeout(function() {skin.updateSize(me._icon_menu);}, 350);
				}
				else {
					me._icon_menu.ggParameter.sx = 1;
					me._icon_menu.ggParameter.sy = 1;
					me._icon_menu.style.transform=parameterToTransform(me._icon_menu.ggParameter);
					setTimeout(function() {skin.updateSize(me._icon_menu);}, 350);
				}
			}
		}
		me._icon_menu.logicBlock_scaling();
		me._icon_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._icon_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._icon_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._icon_menu.style.transition='transform 300ms ease 0ms';
				if (me._icon_menu.ggCurrentLogicStateVisible == 0) {
					me._icon_menu.style.visibility="hidden";
					me._icon_menu.ggVisible=false;
				}
				else {
					me._icon_menu.style.visibility=(Number(me._icon_menu.style.opacity)>0||!me._icon_menu.style.opacity)?'inherit':'hidden';
					me._icon_menu.ggVisible=true;
				}
			}
		}
		me._icon_menu.logicBlock_visible();
		me._icon_menu.onclick=function (e) {
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"..\/webview\/menu.php?menu=30&lang=id\"\nwidth=\"100%\";\nstyle=\"height: 100%; min-height: 100%; border-radius:10px;\"\nframeborder=\"0\"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility=(Number(me.__3iframe_container.style.opacity)>0||!me.__3iframe_container.style.opacity)?'inherit':'hidden';
			me.__3iframe_container.ggVisible=true;
		}
		me._icon_menu.onmouseenter=function (e) {
			me.elementMouseOver['icon_menu']=true;
			me._icon_menu.logicBlock_scaling();
		}
		me._icon_menu.onmouseleave=function (e) {
			me.elementMouseOver['icon_menu']=false;
			me._icon_menu.logicBlock_scaling();
		}
		me._icon_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_menu=document.createElement('div');
		els=me._text_menu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text Menu";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_menu.ggUpdateText=function() {
			var params = [];
			var hs = player._("Menu", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_menu.ggUpdateText();
		el.appendChild(els);
		me._text_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_menu.ggUpdatePosition=function (useTransition) {
		}
		me._icon_menu.appendChild(me._text_menu);
		el=me._image_menu=document.createElement('div');
		els=me._image_menu__img=document.createElement('img');
		els.className='ggskin ggskin_image_menu';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image Menu";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button icon-menu";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_menu.ggUpdatePosition=function (useTransition) {
		}
		me._icon_menu.appendChild(me._image_menu);
		me._menubottom.appendChild(me._icon_menu);
		me.divSkin.appendChild(me._menubottom);
		el=me._hotspot=document.createElement('div');
		el.ggId="hotspot";
		el.ggDx=-0.02;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 0.02%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspot.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._hotspot);
		el=me._closebuttonwelcome=document.createElement('div');
		el.ggId="close-button-welcome";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._closebuttonwelcome.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._closebuttonwelcome.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._welcometextcontainer.style.transition='none';
			} else {
				me._welcometextcontainer.style.transition='all 300ms ease 0ms';
			}
			me._welcometextcontainer.style.opacity='0';
			me._welcometextcontainer.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._menubottom.style.transition='none';
			} else {
				me._menubottom.style.transition='all 500ms ease 0ms';
			}
			me._menubottom.style.opacity='1';
			me._menubottom.style.visibility=me._menubottom.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._chatbotbuttoncontainer.style.transition='none';
			} else {
				me._chatbotbuttoncontainer.style.transition='all 500ms ease 0ms';
			}
			me._chatbotbuttoncontainer.style.opacity='1';
			me._chatbotbuttoncontainer.style.visibility=me._chatbotbuttoncontainer.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._mapscontainer.style.transition='none';
			} else {
				me._mapscontainer.style.transition='all 500ms ease 0ms';
			}
			me._mapscontainer.style.opacity='1';
			me._mapscontainer.style.visibility=me._mapscontainer.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._headerright.style.transition='none';
			} else {
				me._headerright.style.transition='all 500ms ease 0ms';
			}
			me._headerright.style.opacity='1';
			me._headerright.style.visibility=me._headerright.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._headerleft.style.transition='none';
			} else {
				me._headerleft.style.transition='all 500ms ease 0ms';
			}
			me._headerleft.style.opacity='1';
			me._headerleft.style.visibility=me._headerleft.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._mobile.style.transition='none';
			} else {
				me._mobile.style.transition='all 500ms ease 0ms';
			}
			me._mobile.style.opacity='1';
			me._mobile.style.visibility=me._mobile.ggVisible?'inherit':'hidden';
			me._closebuttonwelcome.style.transition='none';
			me._closebuttonwelcome.style.visibility='hidden';
			me._closebuttonwelcome.ggVisible=false;
				player.stopSound("_main");
			me._g_compass.style.transition='none';
			me._g_compass.style.opacity='1';
			me._g_compass.style.visibility=me._g_compass.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._maps.style.transition='none';
			} else {
				me._maps.style.transition='all 500ms ease-out 0ms';
			}
			me._maps.style.opacity='1';
			me._maps.style.visibility=me._maps.ggVisible?'inherit':'hidden';
			if (me._maps.ggMapNotLoaded && me._maps.ggInitMap) {
				me._maps.ggInitMap(false);
				me._maps.ggInitMapMarkers(true);
			}
			if (me._maps.ggMapNotLoaded && me._maps.ggInitMap) {
				me._maps.ggInitMap(false);
				me._maps.ggInitMapMarkers(true);
			}
			me._maps.style.transition='none';
			me._maps.style.visibility=(Number(me._maps.style.opacity)>0||!me._maps.style.opacity)?'inherit':'hidden';
			me._maps.ggVisible=true;
			me._containershowhidemobile.style.transition='none';
			me._containershowhidemobile.style.visibility=(Number(me._containershowhidemobile.style.opacity)>0||!me._containershowhidemobile.style.opacity)?'inherit':'hidden';
			me._containershowhidemobile.ggVisible=true;
			if (player.transitionsDisabled) {
				me._bottom_menu_mobile.style.transition='none';
			} else {
				me._bottom_menu_mobile.style.transition='all 500ms ease-out 0ms';
			}
			me._bottom_menu_mobile.style.opacity='1';
			me._bottom_menu_mobile.style.visibility=me._bottom_menu_mobile.ggVisible?'inherit':'hidden';
		}
		me._closebuttonwelcome.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._closebuttonwelcome);
		el=me._welcometextcontainer=document.createElement('div');
		el.ggId="welcome-text-container";
		el.ggDx=-0.15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container welcome-css-tablet";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8.1%;';
		hs+='height : 33.2407%;';
		hs+='left : calc(50% - ((52.2917% + 0px) / 2) - 0.15%);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 52.2917%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._welcometextcontainer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._welcometextcontainer.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._welcometextcontainer.ggCurrentLogicStateSize != newLogicStateSize) {
				me._welcometextcontainer.ggCurrentLogicStateSize = newLogicStateSize;
				me._welcometextcontainer.style.transition='width 0s, height 0s';
				if (me._welcometextcontainer.ggCurrentLogicStateSize == 0) {
					me._welcometextcontainer.style.width='100%';
					me._welcometextcontainer.style.height='33.33%';
					me._welcometextcontainer.style.left = 'calc(50% - (100% / 2) - (0px / 2) + -0.15%)';
					skin.updateSize(me._welcometextcontainer);
				}
				else {
					me._welcometextcontainer.style.width='52.2917%';
					me._welcometextcontainer.style.height='33.2407%';
					me._welcometextcontainer.style.left = 'calc(50% - (52.2917% / 2) - (0px / 2) + -0.15%)';
					skin.updateSize(me._welcometextcontainer);
				}
			}
		}
		me._welcometextcontainer.logicBlock_size();
		me._welcometextcontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._framewelcome=document.createElement('div');
		els=me._framewelcome__img=document.createElement('img');
		els.className='ggskin ggskin_framewelcome';
		els.loading = 'lazy';
		hs=basePath + 'images/framewelcome.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="frame-welcome";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._framewelcome.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._framewelcome.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._framewelcome.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._framewelcome.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._framewelcome.style.transition='';
				if (me._framewelcome.ggCurrentLogicStateVisible == 0) {
					me._framewelcome.style.visibility=(Number(me._framewelcome.style.opacity)>0||!me._framewelcome.style.opacity)?'inherit':'hidden';
					me._framewelcome.ggVisible=true;
				}
				else {
					me._framewelcome.style.visibility="hidden";
					me._framewelcome.ggVisible=false;
				}
			}
		}
		me._framewelcome.logicBlock_visible();
		me._framewelcome.ggUpdatePosition=function (useTransition) {
		}
		me._welcometextcontainer.appendChild(me._framewelcome);
		el=me._framemobile=document.createElement('div');
		els=me._framemobile__img=document.createElement('img');
		els.className='ggskin ggskin_framemobile';
		els.loading = 'lazy';
		hs=basePath + 'images/framemobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="frame-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._framemobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._framemobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._framemobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._framemobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._framemobile.style.transition='';
				if (me._framemobile.ggCurrentLogicStateVisible == 0) {
					me._framemobile.style.visibility=(Number(me._framemobile.style.opacity)>0||!me._framemobile.style.opacity)?'inherit':'hidden';
					me._framemobile.ggVisible=true;
				}
				else {
					me._framemobile.style.visibility="hidden";
					me._framemobile.ggVisible=false;
				}
			}
		}
		me._framemobile.logicBlock_visible();
		me._framemobile.ggUpdatePosition=function (useTransition) {
		}
		me._welcometextcontainer.appendChild(me._framemobile);
		el=me._txtwelcome=document.createElement('div');
		els=me._txtwelcome__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt-welcome";
		el.ggDx=0;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text txt-mobile";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((86.88% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 5%);';
		hs+='visibility : inherit;';
		hs+='width : 86.88%;';
		hs+='pointer-events:auto;';
		hs+='line-height:1.5;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 19px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._txtwelcome.ggUpdateText=function() {
			var params = [];
			var hs = player._("Selamat datang di Pulau Sebeku, permata tak berpenghuni di Lampung Selatan! Nikmati keindahan laut jernih, terumbu karang yang kaya, dan panorama eksotis yang sempurna untuk fotografi drone. Hanya 20 menit perahu dari Pulau Sebesi, destinasi ini menawarkan snorkeling dengan hiu jinak, piknik pantai, dan ketenangan alam liar. Cocok untuk petualang dan konten kreator, Pulau Sebeku menghadirkan pengalaman eksklusif di Selat Sunda. Dengan fasilitas dasar dan akses mudah, pulau ini siap memanjakan Anda dengan keindahan bawah laut dan suasana tenang. Ayo, ciptakan momen tak terlupakan di sini!", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txtwelcome.ggUpdateText();
		el.appendChild(els);
		me._txtwelcome.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtwelcome.ggUpdatePosition=function (useTransition) {
		}
		me._welcometextcontainer.appendChild(me._txtwelcome);
		el=me._btnlangwelcome=document.createElement('div');
		el.ggId="btn-lang-welcome";
		el.ggDx=32.08;
		el.ggDy=-48.7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container flag-mobile-wlc menu-scale btn-lang-scale";
		el.ggType='container';
		hs ='';
		hs+='height : 20.8333%;';
		hs+='left : calc(50% - ((29.4351% + 0px) / 2) + 32.08%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20.8333% + 0px) / 2) - 48.7%);';
		hs+='visibility : inherit;';
		hs+='width : 29.4351%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btnlangwelcome.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnlangwelcome.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._btnlangwelcome.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._btnlangwelcome.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._btnlangwelcome.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._btnlangwelcome.ggCurrentLogicStatePosition == 0) {
					me._btnlangwelcome.style.left = 'calc(50% - (29.4351% / 2))';
					me._btnlangwelcome.style.top = 'calc(50% - (20.8333% / 2))';
				}
				else {
					me._btnlangwelcome.style.left='calc(50% - ((29.4351% + 0px) / 2) + 32.08%)';
					me._btnlangwelcome.style.top='calc(50% - ((20.8333% + 0px) / 2) - 48.7%)';
				}
			}
		}
		me._btnlangwelcome.logicBlock_position();
		me._btnlangwelcome.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btnlangwelcome.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btnlangwelcome.ggCurrentLogicStateSize = newLogicStateSize;
				me._btnlangwelcome.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._btnlangwelcome.ggCurrentLogicStateSize == 0) {
					me._btnlangwelcome.style.width='50%';
					me._btnlangwelcome.style.height='20.83%';
					me._btnlangwelcome.style.left = 'calc(50% - (50% / 2) - (0px / 2) + 32.08%)';
					me._btnlangwelcome.style.top = 'calc(50% - (20.83% / 2) - (0px / 2) + -48.7%)';
					skin.updateSize(me._btnlangwelcome);
				}
				else {
					me._btnlangwelcome.style.width='29.4351%';
					me._btnlangwelcome.style.height='20.8333%';
					me._btnlangwelcome.style.left = 'calc(50% - (29.4351% / 2) - (0px / 2) + 32.08%)';
					me._btnlangwelcome.style.top = 'calc(50% - (20.8333% / 2) - (0px / 2) + -48.7%)';
					skin.updateSize(me._btnlangwelcome);
				}
			}
		}
		me._btnlangwelcome.logicBlock_size();
		me._btnlangwelcome.ggUpdatePosition=function (useTransition) {
		}
		el=me._btnlangwelcomear=document.createElement('div');
		els=me._btnlangwelcomear__img=document.createElement('img');
		els.className='ggskin ggskin_btnlangwelcomear';
		els.loading = 'lazy';
		hs=basePath + 'images/btnlangwelcomear.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn-lang-welcome-ar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image menu-scale";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 2.02%;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btnlangwelcomear.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnlangwelcomear.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btnlangwelcomear.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btnlangwelcomear.ggCurrentLogicStateSize = newLogicStateSize;
				me._btnlangwelcomear.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomear.ggCurrentLogicStateSize == 0) {
					me._btnlangwelcomear.style.width='30px';
					me._btnlangwelcomear.style.height='30px';
					me._btnlangwelcomear.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._btnlangwelcomear);
				}
				else {
					me._btnlangwelcomear.style.width='40px';
					me._btnlangwelcomear.style.height='40px';
					me._btnlangwelcomear.style.top = 'calc(50% - (40px / 2))';
					skin.updateSize(me._btnlangwelcomear);
				}
			}
		}
		me._btnlangwelcomear.logicBlock_size();
		me._btnlangwelcomear.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['btnlangwelcomear'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._btnlangwelcomear.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._btnlangwelcomear.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._btnlangwelcomear.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomear.ggCurrentLogicStateScaling == 0) {
					me._btnlangwelcomear.ggParameter.sx = 1.05;
					me._btnlangwelcomear.ggParameter.sy = 1.05;
					me._btnlangwelcomear.style.transform=parameterToTransform(me._btnlangwelcomear.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomear);}, 150);
				}
				else {
					me._btnlangwelcomear.ggParameter.sx = 1;
					me._btnlangwelcomear.ggParameter.sy = 1;
					me._btnlangwelcomear.style.transform=parameterToTransform(me._btnlangwelcomear.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomear);}, 150);
				}
			}
		}
		me._btnlangwelcomear.logicBlock_scaling();
		me._btnlangwelcomear.onclick=function (e) {
			player.setLanguage("ar");
				player.stopSound("_main");
				player.playSound("Pulau Sebuku sa","1");
		}
		me._btnlangwelcomear.onmouseenter=function (e) {
			me.elementMouseOver['btnlangwelcomear']=true;
			me._btnlangwelcomear.logicBlock_scaling();
		}
		me._btnlangwelcomear.onmouseleave=function (e) {
			me.elementMouseOver['btnlangwelcomear']=false;
			me._btnlangwelcomear.logicBlock_scaling();
		}
		me._btnlangwelcomear.ggUpdatePosition=function (useTransition) {
		}
		me._btnlangwelcome.appendChild(me._btnlangwelcomear);
		el=me._btnlangwelcomecn=document.createElement('div');
		els=me._btnlangwelcomecn__img=document.createElement('img');
		els.className='ggskin ggskin_btnlangwelcomecn';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn-lang-welcome-cn";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image menu-scale";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 17.22%;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btnlangwelcomecn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnlangwelcomecn.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btnlangwelcomecn.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btnlangwelcomecn.ggCurrentLogicStateSize = newLogicStateSize;
				me._btnlangwelcomecn.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomecn.ggCurrentLogicStateSize == 0) {
					me._btnlangwelcomecn.style.width='30px';
					me._btnlangwelcomecn.style.height='30px';
					me._btnlangwelcomecn.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._btnlangwelcomecn);
				}
				else {
					me._btnlangwelcomecn.style.width='40px';
					me._btnlangwelcomecn.style.height='40px';
					me._btnlangwelcomecn.style.top = 'calc(50% - (40px / 2))';
					skin.updateSize(me._btnlangwelcomecn);
				}
			}
		}
		me._btnlangwelcomecn.logicBlock_size();
		me._btnlangwelcomecn.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['btnlangwelcomecn'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._btnlangwelcomecn.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._btnlangwelcomecn.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._btnlangwelcomecn.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomecn.ggCurrentLogicStateScaling == 0) {
					me._btnlangwelcomecn.ggParameter.sx = 1.05;
					me._btnlangwelcomecn.ggParameter.sy = 1.05;
					me._btnlangwelcomecn.style.transform=parameterToTransform(me._btnlangwelcomecn.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomecn);}, 150);
				}
				else {
					me._btnlangwelcomecn.ggParameter.sx = 1;
					me._btnlangwelcomecn.ggParameter.sy = 1;
					me._btnlangwelcomecn.style.transform=parameterToTransform(me._btnlangwelcomecn.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomecn);}, 150);
				}
			}
		}
		me._btnlangwelcomecn.logicBlock_scaling();
		me._btnlangwelcomecn.onclick=function (e) {
			player.setLanguage("zh-CN");
				player.stopSound("_main");
				player.playSound("Pulau Sebuku Za","1");
		}
		me._btnlangwelcomecn.onmouseenter=function (e) {
			me.elementMouseOver['btnlangwelcomecn']=true;
			me._btnlangwelcomecn.logicBlock_scaling();
		}
		me._btnlangwelcomecn.onmouseleave=function (e) {
			me.elementMouseOver['btnlangwelcomecn']=false;
			me._btnlangwelcomecn.logicBlock_scaling();
		}
		me._btnlangwelcomecn.ggUpdatePosition=function (useTransition) {
		}
		me._btnlangwelcome.appendChild(me._btnlangwelcomecn);
		el=me._btnlangwelcomeen=document.createElement('div');
		els=me._btnlangwelcomeen__img=document.createElement('img');
		els.className='ggskin ggskin_btnlangwelcomeen';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn-lang-welcome-en";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image menu-scale";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 34.06%;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btnlangwelcomeen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnlangwelcomeen.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btnlangwelcomeen.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btnlangwelcomeen.ggCurrentLogicStateSize = newLogicStateSize;
				me._btnlangwelcomeen.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomeen.ggCurrentLogicStateSize == 0) {
					me._btnlangwelcomeen.style.width='30px';
					me._btnlangwelcomeen.style.height='30px';
					me._btnlangwelcomeen.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._btnlangwelcomeen);
				}
				else {
					me._btnlangwelcomeen.style.width='40px';
					me._btnlangwelcomeen.style.height='40px';
					me._btnlangwelcomeen.style.top = 'calc(50% - (40px / 2))';
					skin.updateSize(me._btnlangwelcomeen);
				}
			}
		}
		me._btnlangwelcomeen.logicBlock_size();
		me._btnlangwelcomeen.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['btnlangwelcomeen'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._btnlangwelcomeen.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._btnlangwelcomeen.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._btnlangwelcomeen.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomeen.ggCurrentLogicStateScaling == 0) {
					me._btnlangwelcomeen.ggParameter.sx = 1.05;
					me._btnlangwelcomeen.ggParameter.sy = 1.05;
					me._btnlangwelcomeen.style.transform=parameterToTransform(me._btnlangwelcomeen.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomeen);}, 150);
				}
				else {
					me._btnlangwelcomeen.ggParameter.sx = 1;
					me._btnlangwelcomeen.ggParameter.sy = 1;
					me._btnlangwelcomeen.style.transform=parameterToTransform(me._btnlangwelcomeen.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomeen);}, 150);
				}
			}
		}
		me._btnlangwelcomeen.logicBlock_scaling();
		me._btnlangwelcomeen.onclick=function (e) {
			player.setLanguage("en");
				player.stopSound("_main");
				player.playSound("Pulau Sebuku en","1");
		}
		me._btnlangwelcomeen.onmouseenter=function (e) {
			me.elementMouseOver['btnlangwelcomeen']=true;
			me._btnlangwelcomeen.logicBlock_scaling();
		}
		me._btnlangwelcomeen.onmouseleave=function (e) {
			me.elementMouseOver['btnlangwelcomeen']=false;
			me._btnlangwelcomeen.logicBlock_scaling();
		}
		me._btnlangwelcomeen.ggUpdatePosition=function (useTransition) {
		}
		me._btnlangwelcome.appendChild(me._btnlangwelcomeen);
		el=me._btnlangwelcomeid=document.createElement('div');
		els=me._btnlangwelcomeid__img=document.createElement('img');
		els.className='ggskin ggskin_btnlangwelcomeid';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn-lang-welcome-id";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image menu-scale";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 68.32%;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btnlangwelcomeid.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnlangwelcomeid.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btnlangwelcomeid.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btnlangwelcomeid.ggCurrentLogicStateSize = newLogicStateSize;
				me._btnlangwelcomeid.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomeid.ggCurrentLogicStateSize == 0) {
					me._btnlangwelcomeid.style.width='30px';
					me._btnlangwelcomeid.style.height='30px';
					me._btnlangwelcomeid.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._btnlangwelcomeid);
				}
				else {
					me._btnlangwelcomeid.style.width='40px';
					me._btnlangwelcomeid.style.height='40px';
					me._btnlangwelcomeid.style.top = 'calc(50% - (40px / 2))';
					skin.updateSize(me._btnlangwelcomeid);
				}
			}
		}
		me._btnlangwelcomeid.logicBlock_size();
		me._btnlangwelcomeid.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['btnlangwelcomeid'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._btnlangwelcomeid.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._btnlangwelcomeid.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._btnlangwelcomeid.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomeid.ggCurrentLogicStateScaling == 0) {
					me._btnlangwelcomeid.ggParameter.sx = 1.05;
					me._btnlangwelcomeid.ggParameter.sy = 1.05;
					me._btnlangwelcomeid.style.transform=parameterToTransform(me._btnlangwelcomeid.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomeid);}, 150);
				}
				else {
					me._btnlangwelcomeid.ggParameter.sx = 1;
					me._btnlangwelcomeid.ggParameter.sy = 1;
					me._btnlangwelcomeid.style.transform=parameterToTransform(me._btnlangwelcomeid.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomeid);}, 150);
				}
			}
		}
		me._btnlangwelcomeid.logicBlock_scaling();
		me._btnlangwelcomeid.onclick=function (e) {
			player.setLanguage("id");
				player.stopSound("_main");
				player.playSound("Pulau Sebuku id","1");
		}
		me._btnlangwelcomeid.onmouseenter=function (e) {
			me.elementMouseOver['btnlangwelcomeid']=true;
			me._btnlangwelcomeid.logicBlock_scaling();
		}
		me._btnlangwelcomeid.onmouseleave=function (e) {
			me.elementMouseOver['btnlangwelcomeid']=false;
			me._btnlangwelcomeid.logicBlock_scaling();
		}
		me._btnlangwelcomeid.ggUpdatePosition=function (useTransition) {
		}
		me._btnlangwelcome.appendChild(me._btnlangwelcomeid);
		el=me._btnlangwelcomenl=document.createElement('div');
		els=me._btnlangwelcomenl__img=document.createElement('img');
		els.className='ggskin ggskin_btnlangwelcomenl';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn-lang-welcome-nl";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image menu-scale";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 51.21%;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btnlangwelcomenl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btnlangwelcomenl.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btnlangwelcomenl.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btnlangwelcomenl.ggCurrentLogicStateSize = newLogicStateSize;
				me._btnlangwelcomenl.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomenl.ggCurrentLogicStateSize == 0) {
					me._btnlangwelcomenl.style.width='30px';
					me._btnlangwelcomenl.style.height='30px';
					me._btnlangwelcomenl.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._btnlangwelcomenl);
				}
				else {
					me._btnlangwelcomenl.style.width='40px';
					me._btnlangwelcomenl.style.height='40px';
					me._btnlangwelcomenl.style.top = 'calc(50% - (40px / 2))';
					skin.updateSize(me._btnlangwelcomenl);
				}
			}
		}
		me._btnlangwelcomenl.logicBlock_size();
		me._btnlangwelcomenl.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['btnlangwelcomenl'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._btnlangwelcomenl.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._btnlangwelcomenl.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._btnlangwelcomenl.style.transition='width 0s, height 0s, transform 100ms linear 0ms';
				if (me._btnlangwelcomenl.ggCurrentLogicStateScaling == 0) {
					me._btnlangwelcomenl.ggParameter.sx = 1.05;
					me._btnlangwelcomenl.ggParameter.sy = 1.05;
					me._btnlangwelcomenl.style.transform=parameterToTransform(me._btnlangwelcomenl.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomenl);}, 150);
				}
				else {
					me._btnlangwelcomenl.ggParameter.sx = 1;
					me._btnlangwelcomenl.ggParameter.sy = 1;
					me._btnlangwelcomenl.style.transform=parameterToTransform(me._btnlangwelcomenl.ggParameter);
					setTimeout(function() {skin.updateSize(me._btnlangwelcomenl);}, 150);
				}
			}
		}
		me._btnlangwelcomenl.logicBlock_scaling();
		me._btnlangwelcomenl.onclick=function (e) {
			player.setLanguage("nl");
				player.stopSound("_main");
				player.playSound("Pulau Sebuku dutch","1");
		}
		me._btnlangwelcomenl.onmouseenter=function (e) {
			me.elementMouseOver['btnlangwelcomenl']=true;
			me._btnlangwelcomenl.logicBlock_scaling();
		}
		me._btnlangwelcomenl.onmouseleave=function (e) {
			me.elementMouseOver['btnlangwelcomenl']=false;
			me._btnlangwelcomenl.logicBlock_scaling();
		}
		me._btnlangwelcomenl.ggUpdatePosition=function (useTransition) {
		}
		me._btnlangwelcome.appendChild(me._btnlangwelcomenl);
		me._welcometextcontainer.appendChild(me._btnlangwelcome);
		me.divSkin.appendChild(me._welcometextcontainer);
		el=me.__3iframe_container=document.createElement('div');
		el.ggId="3-Iframe Container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 96;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3iframe_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3iframe_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._backdrop=document.createElement('div');
		el.ggId="Backdrop";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='opacity : 0.90001;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._backdrop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._backdrop.ggUpdatePosition=function (useTransition) {
		}
		me.__3iframe_container.appendChild(me._backdrop);
		el=me._iframe=document.createElement('div');
		els=me._iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text iframe";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0%;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._iframe.ggUpdateText();
		el.appendChild(els);
		me._iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe.ggUpdatePosition=function (useTransition) {
		}
		me.__3iframe_container.appendChild(me._iframe);
		el=me._closebuttoniframe=document.createElement('div');
		els=me._closebuttoniframe__img=document.createElement('img');
		els.className='ggskin ggskin_closebuttoniframe';
		els.loading = 'lazy';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close-button-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image close-button-iframe";
		el.ggType='image';
		hs ='';
		hs+='bottom : 4%;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._closebuttoniframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._closebuttoniframe.onclick=function (e) {
			me.__3iframe_container.style.transition='none';
			me.__3iframe_container.style.visibility='hidden';
			me.__3iframe_container.ggVisible=false;
				me._iframe.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._iframe.ggUpdateText();
			me._iframe.ggTextDiv.scrollTop = 0;
		}
		me._closebuttoniframe.ggUpdatePosition=function (useTransition) {
		}
		me.__3iframe_container.appendChild(me._closebuttoniframe);
		me.divSkin.appendChild(me.__3iframe_container);
		el=me.__2video_teaser=document.createElement('div');
		el.ggId="2-Video Teaser";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 98;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2video_teaser.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__2video_teaser.ggUpdatePosition=function (useTransition) {
		}
		el=me._blackscreen=document.createElement('div');
		el.ggId="blackscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle blackscreen";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._blackscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._blackscreen.ggUpdatePosition=function (useTransition) {
		}
		me.__2video_teaser.appendChild(me._blackscreen);
		el=me._video_desktop=document.createElement('div');
		me._video_desktop.seekbars = [];
		me._video_desktop.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_desktop.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_desktop.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_desktop.hasChildNodes()) {
				me._video_desktop.removeChild(me._video_desktop.lastChild);
			}
			if (me._video_desktop__vid) {
				me._video_desktop__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_desktop.ggVideoNotLoaded == false && me._video_desktop.ggDeactivate && player.isPlaying('video_desktop')) { me._video_desktop.ggDeactivate(); }
				me._video_desktop.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_desktop');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_desktop.ggVideoNotLoaded = false;
			me._video_desktop__vid=document.createElement('video');
			me._video_desktop__vid.className='ggskin ggskin_video';
			me._video_desktop__vid.setAttribute('width', '100%');
			me._video_desktop__vid.setAttribute('height', '100%');
			me._video_desktop__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_desktop__vid.setAttribute('controlsList', 'nodownload');
			me._video_desktop__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_desktop__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_desktop__vid.setAttribute('autoplay', '');
			me._video_desktop__source=document.createElement('source');
			me._video_desktop__source.setAttribute('src', media);
			me._video_desktop__vid.setAttribute('playsinline', 'playsinline');
			me._video_desktop__vid.setAttribute('style', ';');
			me._video_desktop__vid.style.outline = 'none';
			me._video_desktop__vid.appendChild(me._video_desktop__source);
			me._video_desktop.appendChild(me._video_desktop__vid);
			var videoEl = player.registerVideoElement('video - desktop', me._video_desktop__vid);
			videoEl.autoplay = true;
			player.changeVolume('video - desktop', 0.0);
			notifySeekbars();
			if (me._video_desktop.ggMediaEnded) {
				me._video_desktop__vid.addEventListener('ended', me._video_desktop.ggMediaEnded);
			}
			me._video_desktop.ggVideoSource = media;
		}
		el.ggId="video - desktop";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video lawang-sewu-desktop-video";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_desktop.ggIsActive=function() {
			if (me._video_desktop__vid != null) {
				return (me._video_desktop__vid.paused == false && me._video_desktop__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getSoundsPermitted() == 1)) && 
				((player.getViewerSize(true).width >= 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_desktop.style.transition='opacity 0s';
				if (me._video_desktop.ggCurrentLogicStateVisible == 0) {
					me._video_desktop.style.visibility=(Number(me._video_desktop.style.opacity)>0||!me._video_desktop.style.opacity)?'inherit':'hidden';
					if (me._video_desktop.ggVideoNotLoaded) {
						me._video_desktop.ggInitMedia(me._video_desktop.ggVideoSource);
					}
					me._video_desktop.ggVisible=true;
				}
				else {
					me._video_desktop.style.visibility="hidden";
					me._video_desktop.ggVisible=false;
				}
			}
		}
		me._video_desktop.logicBlock_visible();
		me._video_desktop.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._video_desktop.ggIsActive() == true)) && 
				((player.getVariableValue('v_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_desktop.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_desktop.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_desktop.style.transition='opacity 0s';
				if (me._video_desktop.ggCurrentLogicStateAlpha == 0) {
					me._video_desktop.style.visibility=me._video_desktop.ggVisible?'inherit':'hidden';
					if (me._video_desktop.ggVideoNotLoaded) {
						me._video_desktop.ggInitMedia(me._video_desktop.ggVideoSource);
					}
					me._video_desktop.style.opacity=1;
				}
				else {
					me._video_desktop.style.visibility=me._video_desktop.ggVisible?'inherit':'hidden';
					if (me._video_desktop.ggVideoNotLoaded) {
						me._video_desktop.ggInitMedia(me._video_desktop.ggVideoSource);
					}
					me._video_desktop.style.opacity=1;
				}
			}
		}
		me._video_desktop.logicBlock_alpha();
		me._video_desktop.ggMediaEnded=function () {
			me.__2video_teaser.style.transition='none';
			me.__2video_teaser.style.visibility='hidden';
			me.__2video_teaser.ggVisible=false;
				player.stopSound("_main");
			if (player.transitionsDisabled) {
				me._maps.style.transition='none';
			} else {
				me._maps.style.transition='all 300ms ease 0ms';
			}
			me._maps.style.opacity='1';
			me._maps.style.visibility=me._maps.ggVisible?'inherit':'hidden';
			if (me._maps.ggMapNotLoaded && me._maps.ggInitMap) {
				me._maps.ggInitMap(false);
				me._maps.ggInitMapMarkers(true);
			}
			player.setLanguage("id-ID");
			if (player.transitionsDisabled) {
				me._headerleft.style.transition='none';
			} else {
				me._headerleft.style.transition='all 500ms ease 0ms';
			}
			me._headerleft.style.opacity='1';
			me._headerleft.style.visibility=me._headerleft.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._welcometextcontainer.style.transition='none';
			} else {
				me._welcometextcontainer.style.transition='all 500ms ease 0ms';
			}
			me._welcometextcontainer.style.opacity='1';
			me._welcometextcontainer.style.visibility=me._welcometextcontainer.ggVisible?'inherit':'hidden';
			me._closebuttonwelcome.style.transition='none';
			me._closebuttonwelcome.style.visibility=(Number(me._closebuttonwelcome.style.opacity)>0||!me._closebuttonwelcome.style.opacity)?'inherit':'hidden';
			me._closebuttonwelcome.ggVisible=true;
			if (player.transitionsDisabled) {
				me._menubottom.style.transition='none';
			} else {
				me._menubottom.style.transition='all 500ms ease 0ms';
			}
			me._menubottom.style.opacity='0';
			me._menubottom.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mobile.style.transition='none';
			} else {
				me._mobile.style.transition='all 500ms ease 0ms';
			}
			me._mobile.style.opacity='0';
			me._mobile.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._chatbotbuttoncontainer.style.transition='none';
			} else {
				me._chatbotbuttoncontainer.style.transition='all 500ms ease 0ms';
			}
			me._chatbotbuttoncontainer.style.opacity='0';
			me._chatbotbuttoncontainer.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mapscontainer.style.transition='none';
			} else {
				me._mapscontainer.style.transition='all 500ms ease 0ms';
			}
			me._mapscontainer.style.opacity='0';
			me._mapscontainer.style.visibility='hidden';
				player.playSound("Pulau Sebuku id","1");
			if (player.transitionsDisabled) {
				me._g_compass.style.transition='none';
			} else {
				me._g_compass.style.transition='all 500ms ease 0ms';
			}
			me._g_compass.style.opacity='0';
			me._g_compass.style.visibility='hidden';
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				player.changeFovLog(-5,true);
			}
		}
		me._video_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.__2video_teaser.appendChild(me._video_desktop);
		el=me._video_mobile=document.createElement('div');
		me._video_mobile.seekbars = [];
		me._video_mobile.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_mobile.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_mobile.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_mobile.hasChildNodes()) {
				me._video_mobile.removeChild(me._video_mobile.lastChild);
			}
			if (me._video_mobile__vid) {
				me._video_mobile__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_mobile.ggVideoNotLoaded == false && me._video_mobile.ggDeactivate && player.isPlaying('video_mobile')) { me._video_mobile.ggDeactivate(); }
				me._video_mobile.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_mobile');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_mobile.ggVideoNotLoaded = false;
			me._video_mobile__vid=document.createElement('video');
			me._video_mobile__vid.className='ggskin ggskin_video';
			me._video_mobile__vid.setAttribute('width', '100%');
			me._video_mobile__vid.setAttribute('height', '100%');
			me._video_mobile__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_mobile__vid.setAttribute('controlsList', 'nodownload');
			me._video_mobile__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_mobile__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_mobile__vid.setAttribute('autoplay', '');
			me._video_mobile__source=document.createElement('source');
			me._video_mobile__source.setAttribute('src', media);
			me._video_mobile__vid.setAttribute('playsinline', 'playsinline');
			me._video_mobile__vid.setAttribute('style', 'object-fit:cover;;');
			me._video_mobile__vid.style.outline = 'none';
			me._video_mobile__vid.appendChild(me._video_mobile__source);
			me._video_mobile.appendChild(me._video_mobile__vid);
			var videoEl = player.registerVideoElement('video - mobile', me._video_mobile__vid);
			videoEl.autoplay = true;
			player.changeVolume('video - mobile', 0.0);
			notifySeekbars();
			if (me._video_mobile.ggMediaEnded) {
				me._video_mobile__vid.addEventListener('ended', me._video_mobile.ggMediaEnded);
			}
			me._video_mobile.ggVideoSource = media;
		}
		el.ggId="video - mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video lawang-sewu-mobile-video";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_mobile.ggIsActive=function() {
			if (me._video_mobile__vid != null) {
				return (me._video_mobile__vid.paused == false && me._video_mobile__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getSoundsPermitted() == 1)) && 
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_mobile.style.transition='';
				if (me._video_mobile.ggCurrentLogicStateVisible == 0) {
					me._video_mobile.style.visibility=(Number(me._video_mobile.style.opacity)>0||!me._video_mobile.style.opacity)?'inherit':'hidden';
					if (me._video_mobile.ggVideoNotLoaded) {
						me._video_mobile.ggInitMedia(me._video_mobile.ggVideoSource);
					}
					me._video_mobile.ggVisible=true;
				}
				else {
					me._video_mobile.style.visibility="hidden";
					me._video_mobile.ggVisible=false;
				}
			}
		}
		me._video_mobile.logicBlock_visible();
		me._video_mobile.ggMediaEnded=function () {
			me.__2video_teaser.style.transition='none';
			me.__2video_teaser.style.visibility='hidden';
			me.__2video_teaser.ggVisible=false;
				player.stopSound("_main");
			if (player.transitionsDisabled) {
				me._maps.style.transition='none';
			} else {
				me._maps.style.transition='all 300ms ease 0ms';
			}
			me._maps.style.opacity='1';
			me._maps.style.visibility=me._maps.ggVisible?'inherit':'hidden';
			if (me._maps.ggMapNotLoaded && me._maps.ggInitMap) {
				me._maps.ggInitMap(false);
				me._maps.ggInitMapMarkers(true);
			}
			player.setLanguage("id-ID");
			if (player.transitionsDisabled) {
				me._headerleft.style.transition='none';
			} else {
				me._headerleft.style.transition='all 500ms ease 0ms';
			}
			me._headerleft.style.opacity='1';
			me._headerleft.style.visibility=me._headerleft.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._welcometextcontainer.style.transition='none';
			} else {
				me._welcometextcontainer.style.transition='all 500ms ease 0ms';
			}
			me._welcometextcontainer.style.opacity='1';
			me._welcometextcontainer.style.visibility=me._welcometextcontainer.ggVisible?'inherit':'hidden';
			me._closebuttonwelcome.style.transition='none';
			me._closebuttonwelcome.style.visibility=(Number(me._closebuttonwelcome.style.opacity)>0||!me._closebuttonwelcome.style.opacity)?'inherit':'hidden';
			me._closebuttonwelcome.ggVisible=true;
			if (player.transitionsDisabled) {
				me._menubottom.style.transition='none';
			} else {
				me._menubottom.style.transition='all 500ms ease 0ms';
			}
			me._menubottom.style.opacity='0';
			me._menubottom.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mobile.style.transition='none';
			} else {
				me._mobile.style.transition='all 500ms ease 0ms';
			}
			me._mobile.style.opacity='0';
			me._mobile.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._chatbotbuttoncontainer.style.transition='none';
			} else {
				me._chatbotbuttoncontainer.style.transition='all 500ms ease 0ms';
			}
			me._chatbotbuttoncontainer.style.opacity='0';
			me._chatbotbuttoncontainer.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mapscontainer.style.transition='none';
			} else {
				me._mapscontainer.style.transition='all 500ms ease 0ms';
			}
			me._mapscontainer.style.opacity='0';
			me._mapscontainer.style.visibility='hidden';
				player.playSound("Pulau Sebuku id","1");
			if (player.transitionsDisabled) {
				me._g_compass.style.transition='none';
			} else {
				me._g_compass.style.transition='all 500ms ease 0ms';
			}
			me._g_compass.style.opacity='0';
			me._g_compass.style.visibility='hidden';
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				player.changeFovLog(-5,true);
			}
		}
		me._video_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__2video_teaser.appendChild(me._video_mobile);
		el=me._skipbutton_1=document.createElement('div');
		els=me._skipbutton_1__img=document.createElement('img');
		els.className='ggskin ggskin_skipbutton_1';
		els.loading = 'lazy';
		hs=basePath + 'images/skipbutton_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		me._skipbutton_1.ggUpdateText=function() {
			let altText = player._('Skip');
			me._skipbutton_1.ggSubElement.setAttribute('alt', altText);
			if (me._skipbutton_1.ggSubElementOver) {
				me._skipbutton_1.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._skipbutton_1.ggSubElementActive) {
				me._skipbutton_1.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._skipbutton_1.ggUpdateText();
		el.ggId="skip-button_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 57px;';
		hs+='left : calc(50% - ((149px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._skipbutton_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._skipbutton_1.onclick=function (e) {
			me.__2video_teaser.style.transition='none';
			me.__2video_teaser.style.visibility='hidden';
			me.__2video_teaser.ggVisible=false;
				player.stopSound("_main");
			if (player.transitionsDisabled) {
				me._maps.style.transition='none';
			} else {
				me._maps.style.transition='all 300ms ease 0ms';
			}
			me._maps.style.opacity='1';
			me._maps.style.visibility=me._maps.ggVisible?'inherit':'hidden';
			if (me._maps.ggMapNotLoaded && me._maps.ggInitMap) {
				me._maps.ggInitMap(false);
				me._maps.ggInitMapMarkers(true);
			}
			player.setLanguage("id-ID");
			if (player.transitionsDisabled) {
				me._headerleft.style.transition='none';
			} else {
				me._headerleft.style.transition='all 500ms ease 0ms';
			}
			me._headerleft.style.opacity='1';
			me._headerleft.style.visibility=me._headerleft.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._welcometextcontainer.style.transition='none';
			} else {
				me._welcometextcontainer.style.transition='all 500ms ease 0ms';
			}
			me._welcometextcontainer.style.opacity='1';
			me._welcometextcontainer.style.visibility=me._welcometextcontainer.ggVisible?'inherit':'hidden';
			me._closebuttonwelcome.style.transition='none';
			me._closebuttonwelcome.style.visibility=(Number(me._closebuttonwelcome.style.opacity)>0||!me._closebuttonwelcome.style.opacity)?'inherit':'hidden';
			me._closebuttonwelcome.ggVisible=true;
			if (player.transitionsDisabled) {
				me._menubottom.style.transition='none';
			} else {
				me._menubottom.style.transition='all 500ms ease 0ms';
			}
			me._menubottom.style.opacity='0';
			me._menubottom.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mobile.style.transition='none';
			} else {
				me._mobile.style.transition='all 500ms ease 0ms';
			}
			me._mobile.style.opacity='0';
			me._mobile.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._chatbotbuttoncontainer.style.transition='none';
			} else {
				me._chatbotbuttoncontainer.style.transition='all 500ms ease 0ms';
			}
			me._chatbotbuttoncontainer.style.opacity='0';
			me._chatbotbuttoncontainer.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mapscontainer.style.transition='none';
			} else {
				me._mapscontainer.style.transition='all 500ms ease 0ms';
			}
			me._mapscontainer.style.opacity='0';
			me._mapscontainer.style.visibility='hidden';
				player.playSound("Pulau Sebuku id","1");
			if (player.transitionsDisabled) {
				me._g_compass.style.transition='none';
			} else {
				me._g_compass.style.transition='all 500ms ease 0ms';
			}
			me._g_compass.style.opacity='0';
			me._g_compass.style.visibility='hidden';
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				player.changeFovLog(-5,true);
			}
		}
		me._skipbutton_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2video_teaser.appendChild(me._skipbutton_1);
		me.divSkin.appendChild(me.__2video_teaser);
		el=me.__1loading_screen=document.createElement('div');
		el.ggId="1-Loading Screen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1loading_screen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1loading_screen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getSoundsPermitted() == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1loading_screen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1loading_screen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1loading_screen.style.transition='';
				if (me.__1loading_screen.ggCurrentLogicStateVisible == 0) {
					me.__1loading_screen.style.visibility="hidden";
					me.__1loading_screen.ggVisible=false;
				}
				else {
					me.__1loading_screen.style.visibility=(Number(me.__1loading_screen.style.opacity)>0||!me.__1loading_screen.style.opacity)?'inherit':'hidden';
					me.__1loading_screen.ggVisible=true;
				}
			}
		}
		me.__1loading_screen.logicBlock_visible();
		me.__1loading_screen.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2_loading=document.createElement('div');
		el.ggId="Rectangle 2 loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2_loading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2_loading.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getSoundsPermitted() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_2_loading.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_2_loading.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_2_loading.style.transition='';
				if (me._rectangle_2_loading.ggCurrentLogicStateVisible == 0) {
					me._rectangle_2_loading.style.visibility=(Number(me._rectangle_2_loading.style.opacity)>0||!me._rectangle_2_loading.style.opacity)?'inherit':'hidden';
					me._rectangle_2_loading.ggVisible=true;
				}
				else {
					me._rectangle_2_loading.style.visibility="hidden";
					me._rectangle_2_loading.ggVisible=false;
				}
			}
		}
		me._rectangle_2_loading.logicBlock_visible();
		me._rectangle_2_loading.ggUpdatePosition=function (useTransition) {
		}
		me.__1loading_screen.appendChild(me._rectangle_2_loading);
		el=me._containeraudiotext=document.createElement('div');
		els=me._containeraudiotext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Container-audiotext";
		el.ggDx=-0.05;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #f8f8f8;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : #000000;';
		hs+='height : 24.4444%;';
		hs+='left : calc(50% - ((27.6563% + 0px) / 2) - 0.05%);';
		hs+='position : absolute;';
		hs+='top : 23.89%;';
		hs+='visibility : hidden;';
		hs+='width : 27.6563%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._containeraudiotext.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._containeraudiotext.ggUpdateText();
		el.appendChild(els);
		me._containeraudiotext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containeraudiotext.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._containeraudiotext.ggCurrentLogicStateSize != newLogicStateSize) {
				me._containeraudiotext.ggCurrentLogicStateSize = newLogicStateSize;
				me._containeraudiotext.style.transition='width 0s, height 0s';
				if (me._containeraudiotext.ggCurrentLogicStateSize == 0) {
					me._containeraudiotext.style.width='70%';
					me._containeraudiotext.style.height='20%';
					me._containeraudiotext.style.left = 'calc(50% - (70% / 2) - (0px / 2) + -0.05%)';
					skin.updateSize(me._containeraudiotext);
				}
				else {
					me._containeraudiotext.style.width='27.6563%';
					me._containeraudiotext.style.height='24.4444%';
					me._containeraudiotext.style.left = 'calc(50% - (27.6563% / 2) - (0px / 2) + -0.05%)';
					skin.updateSize(me._containeraudiotext);
				}
			}
		}
		me._containeraudiotext.logicBlock_size();
		me._containeraudiotext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getSoundsPermitted() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._containeraudiotext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._containeraudiotext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._containeraudiotext.style.transition='width 0s, height 0s';
				if (me._containeraudiotext.ggCurrentLogicStateVisible == 0) {
					me._containeraudiotext.style.visibility=(Number(me._containeraudiotext.style.opacity)>0||!me._containeraudiotext.style.opacity)?'inherit':'hidden';
					me._containeraudiotext.ggVisible=true;
				}
				else {
					me._containeraudiotext.style.visibility="hidden";
					me._containeraudiotext.ggVisible=false;
				}
			}
		}
		me._containeraudiotext.logicBlock_visible();
		me._containeraudiotext.ggUpdatePosition=function (useTransition) {
		}
		el=me._yes=document.createElement('div');
		els=me._yes__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="YES";
		el.ggDx=-17.15;
		el.ggDy=14.96;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='background : #d8d4d4;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(27,33,26,1);';
		hs+='cursor : pointer;';
		hs+='height : 24.6212%;';
		hs+='left : calc(50% - ((28.6252% + 0px) / 2) - 17.15%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.6212% + 0px) / 2) + 14.96%);';
		hs+='visibility : inherit;';
		hs+='width : 28.6252%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._yes.ggUpdateText=function() {
			var params = [];
			var hs = player._("YES", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._yes.ggUpdateText();
		el.appendChild(els);
		me._yes.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._yes.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._yes.ggCurrentLogicStateSize != newLogicStateSize) {
				me._yes.ggCurrentLogicStateSize = newLogicStateSize;
				me._yes.style.transition='width 0s, height 0s, transform 0s';
				if (me._yes.ggCurrentLogicStateSize == 0) {
					me._yes.style.width='35.63%';
					me._yes.style.height='24.62%';
					me._yes.style.left = 'calc(50% - (35.63% / 2) - (0px / 2) + -17.15%)';
					me._yes.style.top = 'calc(50% - (24.62% / 2) - (0px / 2) + 14.96%)';
					skin.updateSize(me._yes);
				}
				else {
					me._yes.style.width='28.6252%';
					me._yes.style.height='24.6212%';
					me._yes.style.left = 'calc(50% - (28.6252% / 2) - (0px / 2) + -17.15%)';
					me._yes.style.top = 'calc(50% - (24.6212% / 2) - (0px / 2) + 14.96%)';
					skin.updateSize(me._yes);
				}
			}
		}
		me._yes.logicBlock_size();
		me._yes.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['yes'] == true)) && 
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._yes.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._yes.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._yes.style.transition='width 0s, height 0s, transform 0s';
				if (me._yes.ggCurrentLogicStateScaling == 0) {
					me._yes.ggParameter.sx = 1.03;
					me._yes.ggParameter.sy = 1.03;
					me._yes.style.transform=parameterToTransform(me._yes.ggParameter);
					skin.updateSize(me._yes);
				}
				else if (me._yes.ggCurrentLogicStateScaling == 1) {
					me._yes.ggParameter.sx = 0.77;
					me._yes.ggParameter.sy = 0.77;
					me._yes.style.transform=parameterToTransform(me._yes.ggParameter);
					skin.updateSize(me._yes);
				}
				else {
					me._yes.ggParameter.sx = 1;
					me._yes.ggParameter.sy = 1;
					me._yes.style.transform=parameterToTransform(me._yes.ggParameter);
					skin.updateSize(me._yes);
				}
			}
		}
		me._yes.logicBlock_scaling();
		me._yes.onclick=function (e) {
			me.__1loading_screen.style.transition='none';
			me.__1loading_screen.style.visibility='hidden';
			me.__1loading_screen.ggVisible=false;
			me.__2video_teaser.style.transition='none';
			me.__2video_teaser.style.visibility=(Number(me.__2video_teaser.style.opacity)>0||!me.__2video_teaser.style.opacity)?'inherit':'hidden';
			me.__2video_teaser.ggVisible=true;
			if (me._video_desktop.ggApiPlayer) {
				if (me._video_desktop.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_desktop.ggApiPlayer.playVideo();
					};
					if (me._video_desktop.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_desktop.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_desktop.ggApiPlayerType == 'vimeo') {
					me._video_desktop.ggApiPlayer.play();
				}
			} else {
				player.playSound("video - desktop","1");
			}
			if (me._video_mobile.ggApiPlayer) {
				if (me._video_mobile.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_mobile.ggApiPlayer.playVideo();
					};
					if (me._video_mobile.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_mobile.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_mobile.ggApiPlayerType == 'vimeo') {
					me._video_mobile.ggApiPlayer.play();
				}
			} else {
				player.playSound("video - mobile","1");
			}
		}
		me._yes.onmouseenter=function (e) {
			me.elementMouseOver['yes']=true;
			me._yes.logicBlock_scaling();
		}
		me._yes.onmouseleave=function (e) {
			me.elementMouseOver['yes']=false;
			me._yes.logicBlock_scaling();
		}
		me._yes.ggUpdatePosition=function (useTransition) {
		}
		me._containeraudiotext.appendChild(me._yes);
		el=me._no=document.createElement('div');
		els=me._no__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="NO";
		el.ggDx=17.89;
		el.ggDy=14.97;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-text";
		el.ggType='text';
		hs ='';
		hs+='background : #d8d4d4;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(27,33,26,1);';
		hs+='cursor : pointer;';
		hs+='height : 24.6212%;';
		hs+='left : calc(50% - ((28.63% + 0px) / 2) + 17.89%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.6212% + 0px) / 2) + 14.97%);';
		hs+='visibility : inherit;';
		hs+='width : 28.63%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._no.ggUpdateText=function() {
			var params = [];
			var hs = player._("NO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._no.ggUpdateText();
		el.appendChild(els);
		me._no.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._no.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._no.ggCurrentLogicStateSize != newLogicStateSize) {
				me._no.ggCurrentLogicStateSize = newLogicStateSize;
				me._no.style.transition='width 0s, height 0s, transform 0s';
				if (me._no.ggCurrentLogicStateSize == 0) {
					me._no.style.width='35.63%';
					me._no.style.height='24.62%';
					me._no.style.left = 'calc(50% - (35.63% / 2) - (0px / 2) + 17.89%)';
					me._no.style.top = 'calc(50% - (24.62% / 2) - (0px / 2) + 14.97%)';
					skin.updateSize(me._no);
				}
				else {
					me._no.style.width='28.63%';
					me._no.style.height='24.6212%';
					me._no.style.left = 'calc(50% - (28.63% / 2) - (0px / 2) + 17.89%)';
					me._no.style.top = 'calc(50% - (24.6212% / 2) - (0px / 2) + 14.97%)';
					skin.updateSize(me._no);
				}
			}
		}
		me._no.logicBlock_size();
		me._no.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['no'] == true)) && 
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._no.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._no.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._no.style.transition='width 0s, height 0s, transform 0s';
				if (me._no.ggCurrentLogicStateScaling == 0) {
					me._no.ggParameter.sx = 1.03;
					me._no.ggParameter.sy = 1.03;
					me._no.style.transform=parameterToTransform(me._no.ggParameter);
					skin.updateSize(me._no);
				}
				else if (me._no.ggCurrentLogicStateScaling == 1) {
					me._no.ggParameter.sx = 0.77;
					me._no.ggParameter.sy = 0.77;
					me._no.style.transform=parameterToTransform(me._no.ggParameter);
					skin.updateSize(me._no);
				}
				else {
					me._no.ggParameter.sx = 1;
					me._no.ggParameter.sy = 1;
					me._no.style.transform=parameterToTransform(me._no.ggParameter);
					skin.updateSize(me._no);
				}
			}
		}
		me._no.logicBlock_scaling();
		me._no.onclick=function (e) {
			player.mute("_all");
			me.__1loading_screen.style.transition='none';
			me.__1loading_screen.style.visibility='hidden';
			me.__1loading_screen.ggVisible=false;
			me.__2video_teaser.style.transition='none';
			me.__2video_teaser.style.visibility=(Number(me.__2video_teaser.style.opacity)>0||!me.__2video_teaser.style.opacity)?'inherit':'hidden';
			me.__2video_teaser.ggVisible=true;
			if (me._video_desktop.ggApiPlayer) {
				if (me._video_desktop.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_desktop.ggApiPlayer.playVideo();
					};
					if (me._video_desktop.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_desktop.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_desktop.ggApiPlayerType == 'vimeo') {
					me._video_desktop.ggApiPlayer.play();
				}
			} else {
				player.playSound("video - desktop","1");
			}
			if (me._video_mobile.ggApiPlayer) {
				if (me._video_mobile.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_mobile.ggApiPlayer.playVideo();
					};
					if (me._video_mobile.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_mobile.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_mobile.ggApiPlayerType == 'vimeo') {
					me._video_mobile.ggApiPlayer.play();
				}
			} else {
				player.playSound("video - mobile","1");
			}
		}
		me._no.onmouseenter=function (e) {
			me.elementMouseOver['no']=true;
			me._no.logicBlock_scaling();
		}
		me._no.onmouseleave=function (e) {
			me.elementMouseOver['no']=false;
			me._no.logicBlock_scaling();
		}
		me._no.ggUpdatePosition=function (useTransition) {
		}
		me._containeraudiotext.appendChild(me._no);
		el=me._enable_audio=document.createElement('div');
		els=me._enable_audio__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Enable Audio?";
		el.ggDx=-0.1;
		el.ggDy=-19.51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text font-title font-title-mobile welcome-txt";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(51,51,51,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 0.1%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 19.51%);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 30px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._enable_audio.ggUpdateText=function() {
			var params = [];
			var hs = player._("Enable Audio?", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._enable_audio.ggUpdateText();
		el.appendChild(els);
		me._enable_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enable_audio.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width < 768))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._enable_audio.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._enable_audio.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._enable_audio.style.transition='transform 0s';
				if (me._enable_audio.ggCurrentLogicStateScaling == 0) {
					me._enable_audio.ggParameter.sx = 0.75;
					me._enable_audio.ggParameter.sy = 0.75;
					me._enable_audio.style.transform=parameterToTransform(me._enable_audio.ggParameter);
					skin.updateSize(me._enable_audio);
				}
				else {
					me._enable_audio.ggParameter.sx = 1;
					me._enable_audio.ggParameter.sy = 1;
					me._enable_audio.style.transform=parameterToTransform(me._enable_audio.ggParameter);
					skin.updateSize(me._enable_audio);
				}
			}
		}
		me._enable_audio.logicBlock_scaling();
		me._enable_audio.ggUpdatePosition=function (useTransition) {
		}
		me._containeraudiotext.appendChild(me._enable_audio);
		me.__1loading_screen.appendChild(me._containeraudiotext);
		me.divSkin.appendChild(me.__1loading_screen);
		me._headerright.logicBlock_position();
		me._headerright.logicBlock_size();
		me._nlflag.logicBlock_size();
		me._arflag.logicBlock_size();
		me._cnflag.logicBlock_size();
		me._enflag.logicBlock_size();
		me._idflag.logicBlock_size();
		me._nlactive.logicBlock_size();
		me._nlactive.logicBlock_visible();
		me._nlactive.logicBlock_alpha();
		me._aractive.logicBlock_size();
		me._aractive.logicBlock_visible();
		me._aractive.logicBlock_alpha();
		me._cnactive.logicBlock_size();
		me._cnactive.logicBlock_visible();
		me._cnactive.logicBlock_alpha();
		me._enactive.logicBlock_size();
		me._enactive.logicBlock_visible();
		me._enactive.logicBlock_alpha();
		me._idactive.logicBlock_size();
		me._idactive.logicBlock_visible();
		me._idactive.logicBlock_alpha();
		me._logo.logicBlock_size();
		me._titlecontainer.logicBlock_position();
		me._g_compass.logicBlock_position();
		me._g_compass.logicBlock_visible();
		me._zoom_in.logicBlock_alpha();
		me.elementMouseOver['zoom_in']=false;
		me._zoom_out.logicBlock_alpha();
		me.elementMouseOver['zoom_out']=false;
		me._rotate_right.logicBlock_alpha();
		me.elementMouseOver['rotate_right']=false;
		me._rotate_left.logicBlock_alpha();
		me.elementMouseOver['rotate_left']=false;
		me._mobile.logicBlock_visible();
		me._mapscontainer.logicBlock_position();
		me._mapscontainer.logicBlock_size();
		me._maps.ggMarkerInstances=[];
		me._maps.ggLastNodeId=null;
		me._maps.ggMarkerArray=[];
		me._maps.ggGoogleMarkerArray=[];
		me._maps.ggLastZoom = -1;
		me._maps.ggLastLat = 0.0;
		me._maps.ggLastLng = 0.0;
		me._maps.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._maps.ggRadar.update=function() {
			var radar=me._maps.ggRadar;
			var map=me._maps.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._maps.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._maps.ggMapId);
				pan -= me._maps.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._maps.ggFilteredIds.length > 0 && me._maps.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.183594;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#ff0000',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._maps.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._maps.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._maps.ggSetLayer=function(layerIndex) {
			if (typeof me._maps.ggMapLayers === 'object' && me._maps.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me._maps.ggMapLayers).length) {
				me._maps.ggMap.removeLayer(me._maps.ggCurMap);
				me._maps.ggCurMap = me._maps.ggMapLayers[Object.keys(me._maps.ggMapLayers)[layerIndex]];
				me._maps.ggMap.addLayer(me._maps.ggCurMap);
			}
		}
		me._maps.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._maps.ggMapId);
			var mapDetails = player.getMapDetails(me._maps.ggMapId);
			if (!me._maps.ggMapId) return;
			if (!me._maps.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._maps.style.backgroundColor = mapDetails['bgcolor'];
				me._maps.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._maps.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._maps.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._maps.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me._maps.ggLastLat, me._maps.ggLastLng);
			}
			if (mapType == 'web') {
				if (me._maps.ggLastZoom == -1) me._maps.ggLastZoom = 13;
				var initZoom = keepZoom ? me._maps.ggLastZoom : 13;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: false,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._maps.ggMap = L.map(me._maps, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me._maps.ggMap.setMaxBounds(maxBounds);
					me._maps.ggMap.setMinZoom(me._maps.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._maps.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._maps.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._maps.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me._maps.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._maps.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._maps.ggMapLayers, overlayMaps).addTo(me._maps.ggMap);
						me._maps.ggCurMap.addTo(me._maps.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me._maps.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._maps.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me._maps.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._maps.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._maps.ggMapLayers, overlayMaps).addTo(me._maps.ggMap);
						me._maps.ggCurMap.addTo(me._maps.ggMap);
						me._maps.ggMap.on('baselayerchange', function(event) {
							me._maps.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._maps.ggMap);
					}
				}
				me._maps.ggMap.on('zoom', function() {
					me._maps.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me._maps.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._maps.mapHeightInDeg / 2;
					mapCenter.lng = me._maps.mapWidthInDeg / 2;
				}
				if (me._maps.ggLastZoom == -1) me._maps.ggLastZoom = 7;
				var initZoom = keepZoom ? me._maps.ggLastZoom : 20;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControl: false,
					attributionControl: false
				};
				me._maps.ggMap = L.map(me._maps, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._maps.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._maps.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._maps.ggMap);
				me._maps.ggMap.on('move zoom', function() {
					me._maps.ggCheckBounds(mapDetails);
					me._maps.ggRadar.update();
				});
				me._maps.ggCheckBounds(mapDetails);
			}
			me._maps.ggMapNotLoaded = false;
		}
		me._maps.ggClearMap=function() {
		me._maps.ggClearMapMarkers();
		if (me._maps.ggMap) me._maps.ggMap.remove();
		me._maps.ggMap = null;
		me._maps.ggMapNotLoaded = true;
		}
		me._maps.ggClearMapMarkers=function() {
			me._maps.ggLastActivMarker = null;
			var id,marker;
			var markers=me._maps.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._maps.ggMap);
				}
			}
			me._maps.ggGoogleMarkerArray=[];
		}
		me._maps.ggCenterNode=function(nodeId) {
			if (!me._maps.ggMap) return;
			var gps;
			if (player.getMapType(me._maps.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._maps.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._maps.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._maps.ggFitBounds=function(force) {
			if (me._maps.ggMapNotLoaded) return;
			if (!me._maps.ggMap) return;
			if (me._maps.ggMarkerBounds.isValid()) {
				if (me._maps.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._maps.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._maps.ggMap.zoomOut(1, {animate: false});
					me._maps.ggMap.fitBounds(me._maps.ggMarkerBounds, {padding: [30, 30], animate: false});
					} else {
						if (player.getMapType(me._maps.ggMapId) == 'web') {
							me._maps.ggMap.setZoom(13);
						} else {
							me._maps.ggMap.setZoom(7 + 13);
						}
					}
				} else {
					me._maps.ggMap.setView(me._maps.ggMarkerBounds.getCenter(), me._maps.ggMap.getZoom());
					if (player.getMapType(me._maps.ggMapId) == 'web') {
						if (force) {
						me._maps.ggMap.setZoom(18);
						} else {
							me._maps.ggMap.setZoom(13);
						}
					} else {
						if (force) {
						me._maps.ggMap.setZoom(7);
						} else {
							me._maps.ggMap.setZoom(7 + 13);
						}
					}
				}
			}
		}
		me._maps.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._maps.ggMap) return;
			me._maps.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._maps.ggFilteredIds = [];
			if (me._maps.ggFilter != '') {
				var filter = me._maps.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._maps.ggFilteredIds.push(nodeId);
					}
				}
				if (me._maps.ggFilteredIds.length > 0) ids = me._maps.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._maps.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._maps.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._maps.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var mapIcon = L.icon({iconUrl: basePath + 'images/_ggMapPin.png', iconRetinaUrl: basePath + 'images/_ggMapPin.png', iconSize : [40, 40], iconAnchor: [20, 40]});
					marker = L.marker(markerLocation, {title: player.getNodeTitle(id), icon: mapIcon});
					marker.ggId=id;
					marker.on('click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					marker.addTo(me._maps.ggMap);
					me._maps.ggGoogleMarkerArray[id] = marker;
					me._maps.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._maps.ggMarkerBounds.isValid() && updateMapBounds) {
				me._maps.ggFitBounds(false);
			}
			skin.updateSize(me._maps);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._maps.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._maps.ggMapId = mapId;
			if (!me._maps.ggMapNotLoaded) {
				me._maps.ggLastZoom = me._maps.ggMap.getZoom();
				me._maps.ggLastLat = me._maps.ggMap.getCenter().lat;
				me._maps.ggLastLng = me._maps.ggMap.getCenter().lng;
				me._maps.ggClearMap();
				me._maps.ggInitMap(true);
				me._maps.ggInitMapMarkers(false);
			}
		}
		me._maps.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._maps.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._maps.mapHeightInDeg = me._maps.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._maps.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._maps.mapWidthInDeg = me._maps.mapHeightInDeg * mapAR;
			}
		}
		me._maps.ggInCheckBounds=false;
		me._maps.ggCheckBounds=function(mapDetails) {
			if (me._maps.ggInCheckBounds) return;
			me._maps.ggInCheckBounds = true;
			var mapCenter = me._maps.ggMap.getCenter();
			var currentZoom = me._maps.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._maps.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._maps.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._maps.mapWidthInDeg < me._maps.clientWidth * pixelInDeg) {
				var xMargin = (me._maps.clientWidth * pixelInDeg - me._maps.mapWidthInDeg) / 2;
				if (x < me._maps.mapWidthInDeg / 2 - xMargin) x = me._maps.mapWidthInDeg / 2 - xMargin;
				if (x > me._maps.mapWidthInDeg / 2 + xMargin) x = me._maps.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._maps.mapWidthInDeg - xOffset) x = me._maps.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._maps.mapHeightInDeg < me._maps.clientHeight * pixelInDeg) {
				var yMargin = (me._maps.clientHeight * pixelInDeg - me._maps.mapHeightInDeg) / 2;
				if (y < -me._maps.mapHeightInDeg / 2 - yMargin) y = -me._maps.mapHeightInDeg / 2 - yMargin;
				if (y > -me._maps.mapHeightInDeg / 2 + yMargin) y = -me._maps.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._maps.mapHeightInDeg + yOffset) y = -me._maps.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._maps.ggMap.setView(newCenter, me._maps.ggMap.getZoom(), {animate: false});
			}
			me._maps.ggInCheckBounds = false;
		}
		me._btndrone.logicBlock_position();
		me._btndrone.logicBlock_size();
		me.elementMouseOver['btndrone']=false;
		me._showimage.logicBlock_size();
		me._showimage.logicBlock_visible();
		me.elementMouseOver['showimage']=false;
		me._hideimage.logicBlock_size();
		me._hideimage.logicBlock_visible();
		me.elementMouseOver['hideimage']=false;
		me._chatbotbuttoncontainer.logicBlock_position();
		me._chatbotbuttoncontainer.logicBlock_size();
		me.elementMouseOver['chatbotbuttoncontainer']=false;
		me._txtchatbot.logicBlock_position();
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_size();
		me._containershowhidemobile.logicBlock_visible();
		me._showmobile.logicBlock_position();
		me._showmobile.logicBlock_size();
		me._showmobile.logicBlock_visible();
		me._hidemobile.logicBlock_position();
		me._hidemobile.logicBlock_size();
		me._hidemobile.logicBlock_visible();
		me._chatbotcontainer.logicBlock_position();
		me._button_kategori.logicBlock_position();
		me._button_kategori.logicBlock_size();
		me._button_kategori.logicBlock_scaling();
		me._button_kategori.logicBlock_visible();
		me.elementMouseOver['button_kategori']=false;
		me._recright.logicBlock_position();
		me._recright.logicBlock_size();
		me._recleft.logicBlock_size();
		me._icon_discover.logicBlock_scaling();
		me._icon_discover.logicBlock_visible();
		me.elementMouseOver['icon_discover']=false;
		me._icon_info.logicBlock_scaling();
		me._icon_info.logicBlock_visible();
		me.elementMouseOver['icon_info']=false;
		me._icon_public.logicBlock_scaling();
		me._icon_public.logicBlock_visible();
		me.elementMouseOver['icon_public']=false;
		me._icon_menu.logicBlock_scaling();
		me._icon_menu.logicBlock_visible();
		me.elementMouseOver['icon_menu']=false;
		me._welcometextcontainer.logicBlock_size();
		me._framewelcome.logicBlock_visible();
		me._framemobile.logicBlock_visible();
		me._btnlangwelcome.logicBlock_position();
		me._btnlangwelcome.logicBlock_size();
		me._btnlangwelcomear.logicBlock_size();
		me._btnlangwelcomear.logicBlock_scaling();
		me.elementMouseOver['btnlangwelcomear']=false;
		me._btnlangwelcomecn.logicBlock_size();
		me._btnlangwelcomecn.logicBlock_scaling();
		me.elementMouseOver['btnlangwelcomecn']=false;
		me._btnlangwelcomeen.logicBlock_size();
		me._btnlangwelcomeen.logicBlock_scaling();
		me.elementMouseOver['btnlangwelcomeen']=false;
		me._btnlangwelcomeid.logicBlock_size();
		me._btnlangwelcomeid.logicBlock_scaling();
		me.elementMouseOver['btnlangwelcomeid']=false;
		me._btnlangwelcomenl.logicBlock_size();
		me._btnlangwelcomenl.logicBlock_scaling();
		me.elementMouseOver['btnlangwelcomenl']=false;
		me._video_desktop.logicBlock_visible();
		me._video_desktop.logicBlock_alpha();
		me._video_desktop.ggVideoSource = 'media/Hilight%20Horizontal%20Sebuku%20Grading%20Nyongki.webm';
		me._video_desktop.ggVideoNotLoaded = true;
		me._video_mobile.logicBlock_visible();
		me._video_mobile.ggVideoSource = 'media/HIGHLIGHT_SEBUKU_MOBILE_NAFTA_V.4.webm';
		me._video_mobile.ggVideoNotLoaded = true;
		me.__1loading_screen.logicBlock_visible();
		me._rectangle_2_loading.logicBlock_visible();
		me._containeraudiotext.logicBlock_size();
		me._containeraudiotext.logicBlock_visible();
		me._yes.logicBlock_size();
		me._yes.logicBlock_scaling();
		me.elementMouseOver['yes']=false;
		me._no.logicBlock_size();
		me._no.logicBlock_scaling();
		me.elementMouseOver['no']=false;
		me._enable_audio.logicBlock_scaling();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('hotspot-default')) {
				for(var i = 0; i < hotspotTemplates['hotspot-default'].length; i++) {
					hotspotTemplates['hotspot-default'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-link-other')) {
				for(var i = 0; i < hotspotTemplates['hotspot-link-other'].length; i++) {
					hotspotTemplates['hotspot-link-other'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-360-out')) {
				for(var i = 0; i < hotspotTemplates['hotspot-360-out'].length; i++) {
					hotspotTemplates['hotspot-360-out'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-drone')) {
				for(var i = 0; i < hotspotTemplates['hotspot-drone'].length; i++) {
					hotspotTemplates['hotspot-drone'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-360')) {
				for(var i = 0; i < hotspotTemplates['hotspot-360'].length; i++) {
					hotspotTemplates['hotspot-360'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-link-other_1')) {
				for(var i = 0; i < hotspotTemplates['hotspot-link-other_1'].length; i++) {
					hotspotTemplates['hotspot-link-other_1'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('hotspot-default')) {
				for(var i = 0; i < hotspotTemplates['hotspot-default'].length; i++) {
					hotspotTemplates['hotspot-default'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-link-other')) {
				for(var i = 0; i < hotspotTemplates['hotspot-link-other'].length; i++) {
					hotspotTemplates['hotspot-link-other'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-360-out')) {
				for(var i = 0; i < hotspotTemplates['hotspot-360-out'].length; i++) {
					hotspotTemplates['hotspot-360-out'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-drone')) {
				for(var i = 0; i < hotspotTemplates['hotspot-drone'].length; i++) {
					hotspotTemplates['hotspot-drone'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-360')) {
				for(var i = 0; i < hotspotTemplates['hotspot-360'].length; i++) {
					hotspotTemplates['hotspot-360'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-link-other_1')) {
				for(var i = 0; i < hotspotTemplates['hotspot-link-other_1'].length; i++) {
					hotspotTemplates['hotspot-link-other_1'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			if (me._maps.ggLastActivMarker) {
				if (me._maps.ggLastActivMarker._div.ggDeactivate) me._maps.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._maps.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._maps.ggLastActivMarker=marker;
			}
			if (!me._maps.ggMapNotLoaded) {
				me._maps.ggCenterNode();
			}
			if (player.getMapType(me._maps.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._maps.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._maps.ggChangeMap(mapId);
					}
				}
			}
			me._maps.ggLastNodeId = id;
			me._maps.ggRadar.update();
			me._video_desktop.logicBlock_alpha();
			me._video_desktop.logicBlock_alpha();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('hotspot-default')) {
				for(var i = 0; i < hotspotTemplates['hotspot-default'].length; i++) {
					hotspotTemplates['hotspot-default'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-link-other')) {
				for(var i = 0; i < hotspotTemplates['hotspot-link-other'].length; i++) {
					hotspotTemplates['hotspot-link-other'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-360-out')) {
				for(var i = 0; i < hotspotTemplates['hotspot-360-out'].length; i++) {
					hotspotTemplates['hotspot-360-out'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-drone')) {
				for(var i = 0; i < hotspotTemplates['hotspot-drone'].length; i++) {
					hotspotTemplates['hotspot-drone'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-360')) {
				for(var i = 0; i < hotspotTemplates['hotspot-360'].length; i++) {
					hotspotTemplates['hotspot-360'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-link-other_1')) {
				for(var i = 0; i < hotspotTemplates['hotspot-link-other_1'].length; i++) {
					hotspotTemplates['hotspot-link-other_1'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._nlactive.logicBlock_visible();
			me._nlactive.logicBlock_alpha();
			me._aractive.logicBlock_visible();
			me._aractive.logicBlock_alpha();
			me._cnactive.logicBlock_visible();
			me._cnactive.logicBlock_alpha();
			me._enactive.logicBlock_visible();
			me._enactive.logicBlock_alpha();
			me._idactive.logicBlock_visible();
			me._idactive.logicBlock_alpha();
			if (me._maps.ggVisible) {
				me._maps.ggClearMap();
				me._maps.ggInitMap(false);
				me._maps.ggInitMapMarkers(true);
			}
			me._video_desktop.logicBlock_visible();
			me._video_desktop.logicBlock_alpha();
			me._video_desktop.logicBlock_alpha();
			me._video_mobile.logicBlock_visible();
			me.__1loading_screen.logicBlock_visible();
			me._rectangle_2_loading.logicBlock_visible();
			me._containeraudiotext.logicBlock_visible();
		});
		player.addListener('hsproxyclick', function(event) {
			if (event.id=='button') {
				me._yes.onclick();
			}
			if (event.id=='button') {
				me._no.onclick();
			}
		});
		player.addListener('hsproxyout', function(event) {
			if (event.id=='button') {
				me._yes.onmouseleave();
			}
			if (event.id=='button') {
				me._no.onmouseleave();
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (event.id=='button') {
				me._yes.onmouseenter();
			}
			if (event.id=='button') {
				me._no.onmouseenter();
			}
		});
		player.addListener('languagechanged', function(event) {
			me._nlactive.logicBlock_visible();
			me._nlactive.logicBlock_alpha();
			me._aractive.logicBlock_visible();
			me._aractive.logicBlock_alpha();
			me._cnactive.logicBlock_visible();
			me._cnactive.logicBlock_alpha();
			me._enactive.logicBlock_visible();
			me._enactive.logicBlock_alpha();
			me._idactive.logicBlock_visible();
			me._idactive.logicBlock_alpha();
		});
		player.addListener('positionchanged', function(event) {
			me._maps.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			me._headerright.logicBlock_position();
			me._headerright.logicBlock_size();
			me._nlflag.logicBlock_size();
			me._arflag.logicBlock_size();
			me._cnflag.logicBlock_size();
			me._enflag.logicBlock_size();
			me._idflag.logicBlock_size();
			me._nlactive.logicBlock_size();
			me._aractive.logicBlock_size();
			me._cnactive.logicBlock_size();
			me._enactive.logicBlock_size();
			me._idactive.logicBlock_size();
			me._logo.logicBlock_size();
			me._titlecontainer.logicBlock_position();
			me._g_compass.logicBlock_position();
			me._g_compass.logicBlock_visible();
			me._mobile.logicBlock_visible();
			me._mapscontainer.logicBlock_position();
			me._mapscontainer.logicBlock_size();
			me._btndrone.logicBlock_position();
			me._btndrone.logicBlock_size();
			me._showimage.logicBlock_visible();
			me._hideimage.logicBlock_visible();
			me._chatbotbuttoncontainer.logicBlock_position();
			me._txtchatbot.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_3.logicBlock_size();
			me._containershowhidemobile.logicBlock_visible();
			me._showmobile.logicBlock_position();
			me._showmobile.logicBlock_size();
			me._showmobile.logicBlock_visible();
			me._hidemobile.logicBlock_position();
			me._hidemobile.logicBlock_size();
			me._hidemobile.logicBlock_visible();
			me._chatbotcontainer.logicBlock_position();
			me._button_kategori.logicBlock_position();
			me._button_kategori.logicBlock_size();
			me._button_kategori.logicBlock_visible();
			me._recright.logicBlock_position();
			me._recright.logicBlock_size();
			me._recleft.logicBlock_size();
			me._icon_discover.logicBlock_visible();
			me._icon_info.logicBlock_visible();
			me._icon_public.logicBlock_visible();
			me._icon_menu.logicBlock_visible();
			me._welcometextcontainer.logicBlock_size();
			me._framewelcome.logicBlock_visible();
			me._framemobile.logicBlock_visible();
			me._btnlangwelcome.logicBlock_position();
			me._btnlangwelcome.logicBlock_size();
			me._btnlangwelcomear.logicBlock_size();
			me._btnlangwelcomecn.logicBlock_size();
			me._btnlangwelcomeen.logicBlock_size();
			me._btnlangwelcomeid.logicBlock_size();
			me._btnlangwelcomenl.logicBlock_size();
			me._video_desktop.logicBlock_visible();
			me._video_mobile.logicBlock_visible();
			me._containeraudiotext.logicBlock_size();
			me._yes.logicBlock_size();
			me._yes.logicBlock_scaling();
			me._no.logicBlock_size();
			me._no.logicBlock_scaling();
			me._enable_audio.logicBlock_scaling();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._video_desktop.logicBlock_visible();
			me._video_mobile.logicBlock_visible();
			me.__1loading_screen.logicBlock_visible();
			me._rectangle_2_loading.logicBlock_visible();
			me._containeraudiotext.logicBlock_visible();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_v_popup', function(event) {
			me._video_desktop.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('hotspot-default')) {
				for(var i = 0; i < hotspotTemplates['hotspot-default'].length; i++) {
					hotspotTemplates['hotspot-default'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-link-other')) {
				for(var i = 0; i < hotspotTemplates['hotspot-link-other'].length; i++) {
					hotspotTemplates['hotspot-link-other'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-drone')) {
				for(var i = 0; i < hotspotTemplates['hotspot-drone'].length; i++) {
					hotspotTemplates['hotspot-drone'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-360')) {
				for(var i = 0; i < hotspotTemplates['hotspot-360'].length; i++) {
					hotspotTemplates['hotspot-360'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hotspot-link-other_1')) {
				for(var i = 0; i < hotspotTemplates['hotspot-link-other_1'].length; i++) {
					hotspotTemplates['hotspot-link-other_1'][i].ggEvent_varchanged_vis_skin();
				}
			}
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_file_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_vimeo_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_youtube_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('videoended', function(event) {
			if (typeof args == 'undefined' || args['video'] == me._video_desktop__vid) { me._video_desktop.logicBlock_alpha(); };
		});
		player.addListener('videopaused', function(event) {
			if (typeof args == 'undefined' || args['video'] == me._video_desktop__vid) { me._video_desktop.logicBlock_alpha(); };
		});
		player.addListener('videostarted', function(event) {
			if (typeof args == 'undefined' || args['video'] == me._video_desktop__vid) { me._video_desktop.logicBlock_alpha(); };
		});
	};
	function SkinHotspotClass_hotspotlinkother_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspotlinkother_1=document.createElement('div');
		el.ggId="hotspot-link-other_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspotlinkother_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspotlinkother_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspotlinkother_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspotlinkother_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspotlinkother_1.style.transition='';
				if (me._hotspotlinkother_1.ggCurrentLogicStateVisible == 0) {
					me._hotspotlinkother_1.style.visibility=(Number(me._hotspotlinkother_1.style.opacity)>0||!me._hotspotlinkother_1.style.opacity)?'inherit':'hidden';
					me._hotspotlinkother_1.ggVisible=true;
				}
				else {
					me._hotspotlinkother_1.style.visibility=(Number(me._hotspotlinkother_1.style.opacity)>0||!me._hotspotlinkother_1.style.opacity)?'inherit':'hidden';
					me._hotspotlinkother_1.ggVisible=true;
				}
			}
		}
		me._hotspotlinkother_1.logicBlock_visible();
		me._hotspotlinkother_1.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),"_self");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotlinkother_1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotlinkother_1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspotlinkother_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotlinkother_1.onmouseleave=function (e) {
			me.elementMouseOver['hotspotlinkother_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspotlinkother_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_custom_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_custom_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_custom_image.style.transition='transform 200ms ease 0ms';
				if (me._ht_node_custom_image.ggCurrentLogicStateScaling == 0) {
					me._ht_node_custom_image.ggParameter.sx = 1.04;
					me._ht_node_custom_image.ggParameter.sy = 1.04;
					me._ht_node_custom_image.style.transform=parameterToTransform(me._ht_node_custom_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_custom_image);}, 250);
				}
				else {
					me._ht_node_custom_image.ggParameter.sx = 1;
					me._ht_node_custom_image.ggParameter.sy = 1;
					me._ht_node_custom_image.style.transform=parameterToTransform(me._ht_node_custom_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_custom_image);}, 250);
				}
			}
		}
		me._ht_node_custom_image.logicBlock_scaling();
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='transform 200ms ease 0ms';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.logicBlock_visible();
		me._ht_node_custom_image.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_custom_image']=true;
			me._ht_node_custom_image.logicBlock_scaling();
		}
		me._ht_node_custom_image.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_custom_image']=false;
			me._ht_node_custom_image.logicBlock_scaling();
		}
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._hotspotlinkother_1.appendChild(me._ht_node_custom_image);
		el=me._txthotspot=document.createElement('div');
		els=me._txthotspot__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt-hotspot";
		el.ggDx=0;
		el.ggDy=-150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) - 150px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 0px 2px 3px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txthotspot.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txthotspot.ggUpdateText();
		player.addListener('changenode', function() {
			me._txthotspot.ggUpdateText();
		});
		el.appendChild(els);
		me._txthotspot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._txthotspot.ggUpdatePosition=function (useTransition) {
		}
		me._hotspotlinkother_1.appendChild(me._txthotspot);
		me._hotspotlinkother_1.logicBlock_visible();
		me.elementMouseOver['hotspotlinkother_1']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
		}
		me._ht_node_custom_image.logicBlock_scaling();
		me._ht_node_custom_image.logicBlock_visible();
		me.elementMouseOver['ht_node_custom_image']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hotspotlinkother_1.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._hotspotlinkother_1.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._hotspotlinkother_1.logicBlock_visible();
			};
			me.__div = me._hotspotlinkother_1;
	};
	function SkinHotspotClass_hotspot360(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot360=document.createElement('div');
		el.ggId="hotspot-360";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot360.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot360.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot360.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot360.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot360.style.transition='';
				if (me._hotspot360.ggCurrentLogicStateVisible == 0) {
					me._hotspot360.style.visibility=(Number(me._hotspot360.style.opacity)>0||!me._hotspot360.style.opacity)?'inherit':'hidden';
					me._hotspot360.ggVisible=true;
				}
				else {
					me._hotspot360.style.visibility=(Number(me._hotspot360.style.opacity)>0||!me._hotspot360.style.opacity)?'inherit':'hidden';
					me._hotspot360.ggVisible=true;
				}
			}
		}
		me._hotspot360.logicBlock_visible();
		me._hotspot360.onclick=function (e) {
			player.videoPanoPlay();
			var list=me.findElements("hotspot-default",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("hotspot-drone",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("hotspot-link-other",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("hotspot-360",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("hotspot-360-out",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot360.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot360.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot360']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot360.onmouseleave=function (e) {
			me.elementMouseOver['hotspot360']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspot360.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_custom_image0=document.createElement('div');
		els=me._ht_node_custom_image0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image0.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image0.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image0.ggAltText));
			me._ht_node_custom_image0.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image0.ggText_untranslated = img;
			me._ht_node_custom_image0.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image0.ggSubElement.style.width = '0px';
			me._ht_node_custom_image0.ggSubElement.style.height = '0px';
			me._ht_node_custom_image0.ggSubElement.src='';
			me._ht_node_custom_image0.ggSubElement.src=me._ht_node_custom_image0.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image0.ggText != player._(me._ht_node_custom_image0.ggText_untranslated)) {
				me._ht_node_custom_image0.ggText = player._(me._ht_node_custom_image0.ggText_untranslated);
				me._ht_node_custom_image0.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_custom_image0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_custom_image0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_custom_image0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_custom_image0.style.transition='transform 200ms ease 0ms';
				if (me._ht_node_custom_image0.ggCurrentLogicStateScaling == 0) {
					me._ht_node_custom_image0.ggParameter.sx = 1.04;
					me._ht_node_custom_image0.ggParameter.sy = 1.04;
					me._ht_node_custom_image0.style.transform=parameterToTransform(me._ht_node_custom_image0.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_custom_image0);}, 250);
				}
				else {
					me._ht_node_custom_image0.ggParameter.sx = 1;
					me._ht_node_custom_image0.ggParameter.sy = 1;
					me._ht_node_custom_image0.style.transform=parameterToTransform(me._ht_node_custom_image0.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_custom_image0);}, 250);
				}
			}
		}
		me._ht_node_custom_image0.logicBlock_scaling();
		me._ht_node_custom_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image0.style.transition='transform 200ms ease 0ms';
				if (me._ht_node_custom_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image0.style.visibility=(Number(me._ht_node_custom_image0.style.opacity)>0||!me._ht_node_custom_image0.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image0.ggSubElement.src=me._ht_node_custom_image0.ggText;
					me._ht_node_custom_image0.ggVisible=true;
				}
				else {
					me._ht_node_custom_image0.style.visibility="hidden";
					me._ht_node_custom_image0.ggSubElement.src='';
					me._ht_node_custom_image0.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image0.logicBlock_visible();
		me._ht_node_custom_image0.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_custom_image0']=true;
			me._ht_node_custom_image0.logicBlock_scaling();
		}
		me._ht_node_custom_image0.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_custom_image0']=false;
			me._ht_node_custom_image0.logicBlock_scaling();
		}
		me._ht_node_custom_image0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image0.clientWidth;
			var parentHeight = me._ht_node_custom_image0.clientHeight;
			var img = me._ht_node_custom_image0__img;
			var aspectRatioDiv = me._ht_node_custom_image0.clientWidth / me._ht_node_custom_image0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image0.ggScrollbars || currentWidth < me._ht_node_custom_image0.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image0.scrollLeft=currentWidth / 2 - me._ht_node_custom_image0.clientWidth / 2;
			}
			if (!me._ht_node_custom_image0.ggScrollbars || currentHeight < me._ht_node_custom_image0.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._hotspot360.appendChild(me._ht_node_custom_image0);
		el=me._txthotspot360=document.createElement('div');
		els=me._txthotspot360__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt-hotspot-360";
		el.ggDx=0;
		el.ggDy=-150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) - 150px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 0px 2px 3px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txthotspot360.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txthotspot360.ggUpdateText();
		player.addListener('changenode', function() {
			me._txthotspot360.ggUpdateText();
		});
		el.appendChild(els);
		me._txthotspot360.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._txthotspot360.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot360.appendChild(me._txthotspot360);
		me._hotspot360.logicBlock_visible();
		me.elementMouseOver['hotspot360']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image0.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image0.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image0.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
			d = 0;
			me._ht_node_custom_image0.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
		}
		me._ht_node_custom_image0.logicBlock_scaling();
		me._ht_node_custom_image0.logicBlock_visible();
		me.elementMouseOver['ht_node_custom_image0']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hotspot360.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._hotspot360.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._hotspot360.logicBlock_visible();
			};
			me.__div = me._hotspot360;
	};
	function SkinHotspotClass_hotspotdrone(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspotdrone=document.createElement('div');
		el.ggId="hotspot-drone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspotdrone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspotdrone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspotdrone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspotdrone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspotdrone.style.transition='';
				if (me._hotspotdrone.ggCurrentLogicStateVisible == 0) {
					me._hotspotdrone.style.visibility=(Number(me._hotspotdrone.style.opacity)>0||!me._hotspotdrone.style.opacity)?'inherit':'hidden';
					me._hotspotdrone.ggVisible=true;
				}
				else {
					me._hotspotdrone.style.visibility=(Number(me._hotspotdrone.style.opacity)>0||!me._hotspotdrone.style.opacity)?'inherit':'hidden';
					me._hotspotdrone.ggVisible=true;
				}
			}
		}
		me._hotspotdrone.logicBlock_visible();
		me._hotspotdrone.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			var list=me.findElements("hotspot-360-out",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				player.changeFovLog(-5,true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotdrone.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotdrone.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspotdrone']=true;
			me._rectangle_1_1.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotdrone.onmouseleave=function (e) {
			me.elementMouseOver['hotspotdrone']=false;
			me._rectangle_1_1.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspotdrone.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_custom_image1=document.createElement('div');
		els=me._ht_node_custom_image1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image1.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image1.ggAltText));
			me._ht_node_custom_image1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image1.ggText_untranslated = img;
			me._ht_node_custom_image1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image1.ggSubElement.style.width = '0px';
			me._ht_node_custom_image1.ggSubElement.style.height = '0px';
			me._ht_node_custom_image1.ggSubElement.src='';
			me._ht_node_custom_image1.ggSubElement.src=me._ht_node_custom_image1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image1.ggText != player._(me._ht_node_custom_image1.ggText_untranslated)) {
				me._ht_node_custom_image1.ggText = player._(me._ht_node_custom_image1.ggText_untranslated);
				me._ht_node_custom_image1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_custom_image1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_custom_image1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_custom_image1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_custom_image1.style.transition='transform 200ms ease 0ms';
				if (me._ht_node_custom_image1.ggCurrentLogicStateScaling == 0) {
					me._ht_node_custom_image1.ggParameter.sx = 1.04;
					me._ht_node_custom_image1.ggParameter.sy = 1.04;
					me._ht_node_custom_image1.style.transform=parameterToTransform(me._ht_node_custom_image1.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_custom_image1);}, 250);
				}
				else {
					me._ht_node_custom_image1.ggParameter.sx = 1;
					me._ht_node_custom_image1.ggParameter.sy = 1;
					me._ht_node_custom_image1.style.transform=parameterToTransform(me._ht_node_custom_image1.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_custom_image1);}, 250);
				}
			}
		}
		me._ht_node_custom_image1.logicBlock_scaling();
		me._ht_node_custom_image1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image1.style.transition='transform 200ms ease 0ms';
				if (me._ht_node_custom_image1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image1.style.visibility=(Number(me._ht_node_custom_image1.style.opacity)>0||!me._ht_node_custom_image1.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image1.ggSubElement.src=me._ht_node_custom_image1.ggText;
					me._ht_node_custom_image1.ggVisible=true;
				}
				else {
					me._ht_node_custom_image1.style.visibility="hidden";
					me._ht_node_custom_image1.ggSubElement.src='';
					me._ht_node_custom_image1.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image1.logicBlock_visible();
		me._ht_node_custom_image1.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_custom_image1']=true;
			me._ht_node_custom_image1.logicBlock_scaling();
		}
		me._ht_node_custom_image1.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_custom_image1']=false;
			me._ht_node_custom_image1.logicBlock_scaling();
		}
		me._ht_node_custom_image1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image1.clientWidth;
			var parentHeight = me._ht_node_custom_image1.clientHeight;
			var img = me._ht_node_custom_image1__img;
			var aspectRatioDiv = me._ht_node_custom_image1.clientWidth / me._ht_node_custom_image1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image1.ggScrollbars || currentWidth < me._ht_node_custom_image1.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image1.scrollLeft=currentWidth / 2 - me._ht_node_custom_image1.clientWidth / 2;
			}
			if (!me._ht_node_custom_image1.ggScrollbars || currentHeight < me._ht_node_custom_image1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._hotspotdrone.appendChild(me._ht_node_custom_image1);
		el=me._rectangle_1_1=document.createElement('div');
		el.ggId="Rectangle 1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.35,sy:0.35,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle box-shadow: 0 1px 3px rgba(0 0 0 0.12) 0 1px 2px rgba(0 0 0 0.24);";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #949494;';
		hs+='border-radius : 10px;';
		hs+='height : 159px;';
		hs+='left : calc(50% - ((278px + 2px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((159px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 278px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['rectangle_1_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1_1.style.transition='transform 100ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_1_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1_1.ggParameter.sx = 0.39;
					me._rectangle_1_1.ggParameter.sy = 0.39;
					me._rectangle_1_1.style.transform=parameterToTransform(me._rectangle_1_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_1_1);}, 150);
				}
				else {
					me._rectangle_1_1.ggParameter.sx = 0.35;
					me._rectangle_1_1.ggParameter.sy = 0.35;
					me._rectangle_1_1.style.transform=parameterToTransform(me._rectangle_1_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_1_1);}, 150);
				}
			}
		}
		me._rectangle_1_1.logicBlock_scaling();
		me._rectangle_1_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspotdrone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_1_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_1_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_1_1.style.transition='transform 100ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_1_1.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_1_1.style.visibility=me._rectangle_1_1.ggVisible?'inherit':'hidden';
					me._rectangle_1_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_1_1.style.opacity == 0.0) { me._rectangle_1_1.style.visibility="hidden"; } }, 505);
					me._rectangle_1_1.style.opacity=0;
				}
			}
		}
		me._rectangle_1_1.logicBlock_alpha();
		me._rectangle_1_1.onmouseenter=function (e) {
			me.elementMouseOver['rectangle_1_1']=true;
			me._rectangle_1_1.logicBlock_scaling();
		}
		me._rectangle_1_1.onmouseleave=function (e) {
			me.elementMouseOver['rectangle_1_1']=false;
			me._rectangle_1_1.logicBlock_scaling();
		}
		me._rectangle_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_thumb_1=document.createElement('div');
		els=me._ht_node_thumb_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		els.setAttribute('src',basePath + "images/ht_node_thumb_1_" + player.getCurrentNode() + "_" + me.hotspot.id + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 10px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_thumb_1";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage test-css";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 138px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((138px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_thumb_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_thumb_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_thumb_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_thumb_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_thumb_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_thumb_1.style.transition='transform 100ms ease 0ms';
				if (me._ht_node_thumb_1.ggCurrentLogicStateScaling == 0) {
					me._ht_node_thumb_1.ggParameter.sx = 1.05;
					me._ht_node_thumb_1.ggParameter.sy = 1.05;
					me._ht_node_thumb_1.style.transform=parameterToTransform(me._ht_node_thumb_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_thumb_1);}, 150);
				}
				else {
					me._ht_node_thumb_1.ggParameter.sx = 1;
					me._ht_node_thumb_1.ggParameter.sy = 1;
					me._ht_node_thumb_1.style.transform=parameterToTransform(me._ht_node_thumb_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_thumb_1);}, 150);
				}
			}
		}
		me._ht_node_thumb_1.logicBlock_scaling();
		me._ht_node_thumb_1.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_thumb_1']=true;
			me._ht_node_thumb_1.logicBlock_scaling();
		}
		me._ht_node_thumb_1.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_thumb_1']=false;
			me._ht_node_thumb_1.logicBlock_scaling();
		}
		me._ht_node_thumb_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1_1.appendChild(me._ht_node_thumb_1);
		me._hotspotdrone.appendChild(me._rectangle_1_1);
		el=me._txthotspot0=document.createElement('div');
		els=me._txthotspot0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt-hotspot";
		el.ggDx=0;
		el.ggDy=-42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) - 42px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 0px 2px 3px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txthotspot0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txthotspot0.ggUpdateText();
		player.addListener('changenode', function() {
			me._txthotspot0.ggUpdateText();
		});
		el.appendChild(els);
		me._txthotspot0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._txthotspot0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspotdrone.appendChild(me._txthotspot0);
		me._hotspotdrone.logicBlock_visible();
		me.elementMouseOver['hotspotdrone']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image1.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
			d = 0;
			me._ht_node_custom_image1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
		}
		me._ht_node_custom_image1.logicBlock_scaling();
		me._ht_node_custom_image1.logicBlock_visible();
		me.elementMouseOver['ht_node_custom_image1']=false;
		me._rectangle_1_1.logicBlock_scaling();
		me._rectangle_1_1.logicBlock_alpha();
		me.elementMouseOver['rectangle_1_1']=false;
		me._ht_node_thumb_1.logicBlock_scaling();
		me.elementMouseOver['ht_node_thumb_1']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hotspotdrone.logicBlock_visible();
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._hotspotdrone.logicBlock_visible();
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._hotspotdrone.logicBlock_visible();
			};
			me.__div = me._hotspotdrone;
	};
	function SkinHotspotClass_hotspot360out(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot360out=document.createElement('div');
		el.ggId="hotspot-360-out";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot360out.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot360out.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			var list=me.findElements("hotspot-360-out",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				player.changeFovLog(-5,true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot360out.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot360out.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot360out']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot360out.onmouseleave=function (e) {
			me.elementMouseOver['hotspot360out']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspot360out.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_custom_image2=document.createElement('div');
		els=me._ht_node_custom_image2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image2.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image2.ggAltText));
			me._ht_node_custom_image2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image2.ggText_untranslated = img;
			me._ht_node_custom_image2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image2.ggSubElement.style.width = '0px';
			me._ht_node_custom_image2.ggSubElement.style.height = '0px';
			me._ht_node_custom_image2.ggSubElement.src='';
			me._ht_node_custom_image2.ggSubElement.src=me._ht_node_custom_image2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image2.ggText != player._(me._ht_node_custom_image2.ggText_untranslated)) {
				me._ht_node_custom_image2.ggText = player._(me._ht_node_custom_image2.ggText_untranslated);
				me._ht_node_custom_image2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image2.style.transition='';
				if (me._ht_node_custom_image2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image2.style.visibility=(Number(me._ht_node_custom_image2.style.opacity)>0||!me._ht_node_custom_image2.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image2.ggSubElement.src=me._ht_node_custom_image2.ggText;
					me._ht_node_custom_image2.ggVisible=true;
				}
				else {
					me._ht_node_custom_image2.style.visibility="hidden";
					me._ht_node_custom_image2.ggSubElement.src='';
					me._ht_node_custom_image2.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image2.logicBlock_visible();
		me._ht_node_custom_image2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image2.clientWidth;
			var parentHeight = me._ht_node_custom_image2.clientHeight;
			var img = me._ht_node_custom_image2__img;
			var aspectRatioDiv = me._ht_node_custom_image2.clientWidth / me._ht_node_custom_image2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image2.ggScrollbars || currentWidth < me._ht_node_custom_image2.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image2.scrollLeft=currentWidth / 2 - me._ht_node_custom_image2.clientWidth / 2;
			}
			if (!me._ht_node_custom_image2.ggScrollbars || currentHeight < me._ht_node_custom_image2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._hotspot360out.appendChild(me._ht_node_custom_image2);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=-26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.35,sy:0.35,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle box-shadow: 0 1px 3px rgba(0 0 0 0.12) 0 1px 2px rgba(0 0 0 0.24);";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 205px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((205px + 0px) / 2) - 26px);';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['rectangle_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style.transition='transform 100ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 0.39;
					me._rectangle_1.ggParameter.sy = 0.39;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_1);}, 150);
				}
				else {
					me._rectangle_1.ggParameter.sx = 0.35;
					me._rectangle_1.ggParameter.sy = 0.35;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_1);}, 150);
				}
			}
		}
		me._rectangle_1.logicBlock_scaling();
		me._rectangle_1.onmouseenter=function (e) {
			me.elementMouseOver['rectangle_1']=true;
			me._rectangle_1.logicBlock_scaling();
		}
		me._rectangle_1.onmouseleave=function (e) {
			me.elementMouseOver['rectangle_1']=false;
			me._rectangle_1.logicBlock_scaling();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_thumb_10=document.createElement('div');
		els=me._ht_node_thumb_10__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		els.setAttribute('src',basePath + "images/ht_node_thumb_1_" + player.getCurrentNode() + "_" + me.hotspot.id + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 10px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_thumb_1";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage test-css";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 138px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((138px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_thumb_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_thumb_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_thumb_10'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_thumb_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_thumb_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_thumb_10.style.transition='transform 100ms ease 0ms';
				if (me._ht_node_thumb_10.ggCurrentLogicStateScaling == 0) {
					me._ht_node_thumb_10.ggParameter.sx = 1.05;
					me._ht_node_thumb_10.ggParameter.sy = 1.05;
					me._ht_node_thumb_10.style.transform=parameterToTransform(me._ht_node_thumb_10.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_thumb_10);}, 150);
				}
				else {
					me._ht_node_thumb_10.ggParameter.sx = 1;
					me._ht_node_thumb_10.ggParameter.sy = 1;
					me._ht_node_thumb_10.style.transform=parameterToTransform(me._ht_node_thumb_10.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_thumb_10);}, 150);
				}
			}
		}
		me._ht_node_thumb_10.logicBlock_scaling();
		me._ht_node_thumb_10.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_thumb_10']=true;
			me._ht_node_thumb_10.logicBlock_scaling();
		}
		me._ht_node_thumb_10.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_thumb_10']=false;
			me._ht_node_thumb_10.logicBlock_scaling();
		}
		me._ht_node_thumb_10.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._ht_node_thumb_10);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 155px;';
		hs+='left : calc(50% - ((270px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((155px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 270px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._image_1);
		me._hotspot360out.appendChild(me._rectangle_1);
		el=me._txthotspot1=document.createElement('div');
		els=me._txthotspot1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt-hotspot";
		el.ggDx=0;
		el.ggDy=-73;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) - 73px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 0px 2px 3px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txthotspot1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txthotspot1.ggUpdateText();
		player.addListener('changenode', function() {
			me._txthotspot1.ggUpdateText();
		});
		el.appendChild(els);
		me._txthotspot1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._txthotspot1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot360out.appendChild(me._txthotspot1);
		me.elementMouseOver['hotspot360out']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image2.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
			d = 0;
			me._ht_node_custom_image2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
		}
		me._ht_node_custom_image2.logicBlock_visible();
		me._rectangle_1.logicBlock_scaling();
		me.elementMouseOver['rectangle_1']=false;
		me._ht_node_thumb_10.logicBlock_scaling();
		me.elementMouseOver['ht_node_thumb_10']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_custom_image2.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_custom_image2.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_custom_image2.logicBlock_visible();
			};
			me.__div = me._hotspot360out;
	};
	function SkinHotspotClass_hotspotlinkother(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspotlinkother=document.createElement('div');
		el.ggId="hotspot-link-other";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspotlinkother.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspotlinkother.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspotlinkother.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspotlinkother.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspotlinkother.style.transition='';
				if (me._hotspotlinkother.ggCurrentLogicStateVisible == 0) {
					me._hotspotlinkother.style.visibility=(Number(me._hotspotlinkother.style.opacity)>0||!me._hotspotlinkother.style.opacity)?'inherit':'hidden';
					me._hotspotlinkother.ggVisible=true;
				}
				else {
					me._hotspotlinkother.style.visibility=(Number(me._hotspotlinkother.style.opacity)>0||!me._hotspotlinkother.style.opacity)?'inherit':'hidden';
					me._hotspotlinkother.ggVisible=true;
				}
			}
		}
		me._hotspotlinkother.logicBlock_visible();
		me._hotspotlinkother.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			var list=me.findElements("hotspot-360-out",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				player.changeFovLog(-5,true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotlinkother.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotlinkother.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspotlinkother']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotlinkother.onmouseleave=function (e) {
			me.elementMouseOver['hotspotlinkother']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspotlinkother.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_custom_image3=document.createElement('div');
		els=me._ht_node_custom_image3__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image3.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image3.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image3.ggAltText));
			me._ht_node_custom_image3.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image3.ggText_untranslated = img;
			me._ht_node_custom_image3.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image3.ggSubElement.style.width = '0px';
			me._ht_node_custom_image3.ggSubElement.style.height = '0px';
			me._ht_node_custom_image3.ggSubElement.src='';
			me._ht_node_custom_image3.ggSubElement.src=me._ht_node_custom_image3.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image3.ggText != player._(me._ht_node_custom_image3.ggText_untranslated)) {
				me._ht_node_custom_image3.ggText = player._(me._ht_node_custom_image3.ggText_untranslated);
				me._ht_node_custom_image3.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_custom_image3'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_custom_image3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_custom_image3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_custom_image3.style.transition='transform 200ms ease 0ms';
				if (me._ht_node_custom_image3.ggCurrentLogicStateScaling == 0) {
					me._ht_node_custom_image3.ggParameter.sx = 1.04;
					me._ht_node_custom_image3.ggParameter.sy = 1.04;
					me._ht_node_custom_image3.style.transform=parameterToTransform(me._ht_node_custom_image3.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_custom_image3);}, 250);
				}
				else {
					me._ht_node_custom_image3.ggParameter.sx = 1;
					me._ht_node_custom_image3.ggParameter.sy = 1;
					me._ht_node_custom_image3.style.transform=parameterToTransform(me._ht_node_custom_image3.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_custom_image3);}, 250);
				}
			}
		}
		me._ht_node_custom_image3.logicBlock_scaling();
		me._ht_node_custom_image3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image3.style.transition='transform 200ms ease 0ms';
				if (me._ht_node_custom_image3.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image3.style.visibility=(Number(me._ht_node_custom_image3.style.opacity)>0||!me._ht_node_custom_image3.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image3.ggSubElement.src=me._ht_node_custom_image3.ggText;
					me._ht_node_custom_image3.ggVisible=true;
				}
				else {
					me._ht_node_custom_image3.style.visibility="hidden";
					me._ht_node_custom_image3.ggSubElement.src='';
					me._ht_node_custom_image3.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image3.logicBlock_visible();
		me._ht_node_custom_image3.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_custom_image3']=true;
			me._ht_node_custom_image3.logicBlock_scaling();
		}
		me._ht_node_custom_image3.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_custom_image3']=false;
			me._ht_node_custom_image3.logicBlock_scaling();
		}
		me._ht_node_custom_image3.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image3.clientWidth;
			var parentHeight = me._ht_node_custom_image3.clientHeight;
			var img = me._ht_node_custom_image3__img;
			var aspectRatioDiv = me._ht_node_custom_image3.clientWidth / me._ht_node_custom_image3.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image3.ggScrollbars || currentWidth < me._ht_node_custom_image3.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image3.scrollLeft=currentWidth / 2 - me._ht_node_custom_image3.clientWidth / 2;
			}
			if (!me._ht_node_custom_image3.ggScrollbars || currentHeight < me._ht_node_custom_image3.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._hotspotlinkother.appendChild(me._ht_node_custom_image3);
		el=me._txthotspot2=document.createElement('div');
		els=me._txthotspot2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt-hotspot";
		el.ggDx=0;
		el.ggDy=-150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) - 150px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 0px 2px 3px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txthotspot2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txthotspot2.ggUpdateText();
		player.addListener('changenode', function() {
			me._txthotspot2.ggUpdateText();
		});
		el.appendChild(els);
		me._txthotspot2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._txthotspot2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspotlinkother.appendChild(me._txthotspot2);
		me._hotspotlinkother.logicBlock_visible();
		me.elementMouseOver['hotspotlinkother']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image3.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image3.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image3.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
			d = 0;
			me._ht_node_custom_image3.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
		}
		me._ht_node_custom_image3.logicBlock_scaling();
		me._ht_node_custom_image3.logicBlock_visible();
		me.elementMouseOver['ht_node_custom_image3']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_custom_image3.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hotspotlinkother.logicBlock_visible();
				me._ht_node_custom_image3.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._hotspotlinkother.logicBlock_visible();
				me._ht_node_custom_image3.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._hotspotlinkother.logicBlock_visible();
			};
			me.__div = me._hotspotlinkother;
	};
	function SkinHotspotClass_hotspotdefault(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspotdefault=document.createElement('div');
		el.ggId="hotspot-default";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspotdefault.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspotdefault.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspotdefault.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspotdefault.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspotdefault.style.transition='';
				if (me._hotspotdefault.ggCurrentLogicStateVisible == 0) {
					me._hotspotdefault.style.visibility=(Number(me._hotspotdefault.style.opacity)>0||!me._hotspotdefault.style.opacity)?'inherit':'hidden';
					me._hotspotdefault.ggVisible=true;
				}
				else {
					me._hotspotdefault.style.visibility=(Number(me._hotspotdefault.style.opacity)>0||!me._hotspotdefault.style.opacity)?'inherit':'hidden';
					me._hotspotdefault.ggVisible=true;
				}
			}
		}
		me._hotspotdefault.logicBlock_visible();
		me._hotspotdefault.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			var list=me.findElements("hotspot-360-out",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				player.changeFovLog(-5,true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotdefault.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotdefault.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspotdefault']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspotdefault.onmouseleave=function (e) {
			me.elementMouseOver['hotspotdefault']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspotdefault.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_custom_image4=document.createElement('div');
		els=me._ht_node_custom_image4__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image4.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image4.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image4.ggAltText));
			me._ht_node_custom_image4.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image4.ggText_untranslated = img;
			me._ht_node_custom_image4.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image4.ggSubElement.style.width = '0px';
			me._ht_node_custom_image4.ggSubElement.style.height = '0px';
			me._ht_node_custom_image4.ggSubElement.src='';
			me._ht_node_custom_image4.ggSubElement.src=me._ht_node_custom_image4.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image4.ggText != player._(me._ht_node_custom_image4.ggText_untranslated)) {
				me._ht_node_custom_image4.ggText = player._(me._ht_node_custom_image4.ggText_untranslated);
				me._ht_node_custom_image4.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image4.style.transition='';
				if (me._ht_node_custom_image4.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image4.style.visibility=(Number(me._ht_node_custom_image4.style.opacity)>0||!me._ht_node_custom_image4.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image4.ggSubElement.src=me._ht_node_custom_image4.ggText;
					me._ht_node_custom_image4.ggVisible=true;
				}
				else {
					me._ht_node_custom_image4.style.visibility="hidden";
					me._ht_node_custom_image4.ggSubElement.src='';
					me._ht_node_custom_image4.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image4.logicBlock_visible();
		me._ht_node_custom_image4.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image4.clientWidth;
			var parentHeight = me._ht_node_custom_image4.clientHeight;
			var img = me._ht_node_custom_image4__img;
			var aspectRatioDiv = me._ht_node_custom_image4.clientWidth / me._ht_node_custom_image4.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image4.ggScrollbars || currentWidth < me._ht_node_custom_image4.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image4.scrollLeft=currentWidth / 2 - me._ht_node_custom_image4.clientWidth / 2;
			}
			if (!me._ht_node_custom_image4.ggScrollbars || currentHeight < me._ht_node_custom_image4.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._hotspotdefault.appendChild(me._ht_node_custom_image4);
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=-26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.35,sy:0.35,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle box-shadow: 0 1px 3px rgba(0 0 0 0.12) 0 1px 2px rgba(0 0 0 0.24);";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 159px;';
		hs+='left : calc(50% - ((278px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((159px + 0px) / 2) - 26px);';
		hs+='visibility : inherit;';
		hs+='width : 278px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['rectangle_10'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_10.style.transition='transform 100ms ease 0ms';
				if (me._rectangle_10.ggCurrentLogicStateScaling == 0) {
					me._rectangle_10.ggParameter.sx = 0.39;
					me._rectangle_10.ggParameter.sy = 0.39;
					me._rectangle_10.style.transform=parameterToTransform(me._rectangle_10.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_10);}, 150);
				}
				else {
					me._rectangle_10.ggParameter.sx = 0.35;
					me._rectangle_10.ggParameter.sy = 0.35;
					me._rectangle_10.style.transform=parameterToTransform(me._rectangle_10.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_10);}, 150);
				}
			}
		}
		me._rectangle_10.logicBlock_scaling();
		me._rectangle_10.onmouseenter=function (e) {
			me.elementMouseOver['rectangle_10']=true;
			me._rectangle_10.logicBlock_scaling();
		}
		me._rectangle_10.onmouseleave=function (e) {
			me.elementMouseOver['rectangle_10']=false;
			me._rectangle_10.logicBlock_scaling();
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_thumb_11=document.createElement('div');
		els=me._ht_node_thumb_11__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		els.setAttribute('src',basePath + "images/ht_node_thumb_1_" + player.getCurrentNode() + "_" + me.hotspot.id + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 10px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_thumb_1";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage test-css";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 138px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((138px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_thumb_11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_thumb_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_thumb_11'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_thumb_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_thumb_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_thumb_11.style.transition='transform 100ms ease 0ms';
				if (me._ht_node_thumb_11.ggCurrentLogicStateScaling == 0) {
					me._ht_node_thumb_11.ggParameter.sx = 1.05;
					me._ht_node_thumb_11.ggParameter.sy = 1.05;
					me._ht_node_thumb_11.style.transform=parameterToTransform(me._ht_node_thumb_11.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_thumb_11);}, 150);
				}
				else {
					me._ht_node_thumb_11.ggParameter.sx = 1;
					me._ht_node_thumb_11.ggParameter.sy = 1;
					me._ht_node_thumb_11.style.transform=parameterToTransform(me._ht_node_thumb_11.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_thumb_11);}, 150);
				}
			}
		}
		me._ht_node_thumb_11.logicBlock_scaling();
		me._ht_node_thumb_11.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_thumb_11']=true;
			me._ht_node_thumb_11.logicBlock_scaling();
		}
		me._ht_node_thumb_11.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_thumb_11']=false;
			me._ht_node_thumb_11.logicBlock_scaling();
		}
		me._ht_node_thumb_11.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_10.appendChild(me._ht_node_thumb_11);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 155px;';
		hs+='left : calc(50% - ((270px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((155px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 270px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_10.appendChild(me._image_10);
		me._hotspotdefault.appendChild(me._rectangle_10);
		el=me._txthotspot3=document.createElement('div');
		els=me._txthotspot3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt-hotspot";
		el.ggDx=0;
		el.ggDy=-73;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) - 73px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 0px 2px 3px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txthotspot3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txthotspot3.ggUpdateText();
		player.addListener('changenode', function() {
			me._txthotspot3.ggUpdateText();
		});
		el.appendChild(els);
		me._txthotspot3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._txthotspot3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspotdefault.appendChild(me._txthotspot3);
		me._hotspotdefault.logicBlock_visible();
		me.elementMouseOver['hotspotdefault']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image4.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image4.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image4.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
			d = 0;
			me._ht_node_custom_image4.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + '%)';
		}
		me._ht_node_custom_image4.logicBlock_visible();
		me._rectangle_10.logicBlock_scaling();
		me.elementMouseOver['rectangle_10']=false;
		me._ht_node_thumb_11.logicBlock_scaling();
		me.elementMouseOver['ht_node_thumb_11']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_custom_image4.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hotspotdefault.logicBlock_visible();
				me._ht_node_custom_image4.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._hotspotdefault.logicBlock_visible();
				me._ht_node_custom_image4.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._hotspotdefault.logicBlock_visible();
			};
			me.__div = me._hotspotdefault;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='hotspot-default') {
				hotspot.skinid = 'hotspot-default';
				hsinst = new SkinHotspotClass_hotspotdefault(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='hotspot-link-other') {
				hotspot.skinid = 'hotspot-link-other';
				hsinst = new SkinHotspotClass_hotspotlinkother(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='hotspot-360-out') {
				hotspot.skinid = 'hotspot-360-out';
				hsinst = new SkinHotspotClass_hotspot360out(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='hotspot-drone') {
				hotspot.skinid = 'hotspot-drone';
				hsinst = new SkinHotspotClass_hotspotdrone(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='hotspot-360') {
				hotspot.skinid = 'hotspot-360';
				hsinst = new SkinHotspotClass_hotspot360(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'hotspot-link-other_1';
				hsinst = new SkinHotspotClass_hotspotlinkother_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._zoom_in.ggUpdateConditionTimer();
		me._zoom_out.ggUpdateConditionTimer();
		me._rotate_right.ggUpdateConditionTimer();
		me._rotate_left.ggUpdateConditionTimer();
		var hs='';
		if (me._compass_pointer_container.ggParameter) {
			hs+=parameterToTransform(me._compass_pointer_container.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me._compass_pointer_container.style.transform=hs;
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"); .ggskin { font-family: "Plus Jakarta Sans", sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
	player.addTranslations({"languages":["ar","en","nl","zh-CN","id"],"projectLanguage":"id-ID","translations":{"  <iframe\n    src=\"https://www.chatbase.co/chatbot-iframe/ld0-XDhWz-2tI29Pd2JeU\"\n    width=\"100%\"\n    style=\"height: 100%; min-height: 100%;\"\n    frameborder=\"0\"\n></iframe>":["","","","",""],"<iframe id=\"url_iframe\"\n    src=\"../webview/discover.html?disc=11&lang=id\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>":["","<iframe id=\"url_iframe\"\n    src=\"../webview/discover.html?disc=11&lang=en\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>","<iframe id=\"url_iframe\"\n    src=\"../webview/discover.html?disc=11&lang=nl\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>","<iframe id=\"url_iframe\"\n    src=\"../webview/discover.html?disc=11&lang=zh\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>",""],"<iframe id=\"url_iframe\"\n    src=\"../webview/informasi.html?info=60&lang=id\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>":["","<iframe id=\"url_iframe\"\n    src=\"../webview/informasi.html?info=60&lang=en\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>","<iframe id=\"url_iframe\"\n    src=\"../webview/informasi.html?info=60&lang=nl\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>","<iframe id=\"url_iframe\"\n    src=\"../webview/informasi.html?info=60&lang=zh\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>",""],"<iframe id=\"url_iframe\"\n    src=\"../webview/kategori-id.html\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>":["","<iframe id=\"url_iframe\"\n    src=\"../webview/kategori-en.html\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>","<iframe id=\"url_iframe\"\n    src=\"../webview/kategori-nl.html\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>","<iframe id=\"url_iframe\"\n    src=\"../webview/kategori-zh.html\"\n    style=\"position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:auto; opacity:1;\"\n    scrolling=\"auto\" allow=\"autoplay; fullscreen; clipboard-write\">\n  </iframe>",""],"Chatbot":["روبوت الدردشة","","Chatbot","聊天机器人",""],"Indonesia":["","","","",""],"Informasi":["معلومة","Information","Informatie","信息",""],"Jelajahi":["يستكشف","Discover","Ontdekken","探索",""],"KATEGORI":["فئة","CATEGORY","CATEGORIE","类别",""],"Produk":["منتج","Product","Product","产品",""],"Selamat datang di UMKM Nabilla, rumah mode spesialis Sulam Usus yang menjadi representasi kekayaan budaya Provinsi Lampung. Usaha ini berfokus pada produksi fesyen adibusana dan siap pakai sejak tahun 2005, mengangkat nilai seni warisan lokal. Produk-produk Nabilla dikenal karena kualitasnya yang tinggi dan berhasil membawa kain tradisional Lampung ke kancah nasional dan internasional. Di sini, Anda dapat melihat langsung keindahan detail sulaman, memahami proses pembuatannya, serta membeli pakaian otentik sebagai oleh-oleh istimewa. Mari dukung kreativitas UMKM Nabilla dalam melestarikan sekaligus memodernisasi warisan budaya Lampung.":["أهلاً بكم في نبيلة، دار أزياء متخصصة في تطريز أوسوس، تُجسّد التراث الثقافي الغني لمقاطعة لامبونغ. ركّزت هذه الدار على إنتاج الأزياء الراقية والأزياء الجاهزة منذ عام ٢٠٠٥، مُعزّزة بذلك القيمة الفنية للتراث المحلي. تشتهر منتجات نبيلة بجودتها العالية، وقد نجحت في نقل أقمشة لامبونغ التقليدية إلى الساحة الوطنية والدولية. هنا، يُمكنكم الاستمتاع بجمال تفاصيل التطريز، والتعرّف على عملية التطريز، وشراء ملابس أصلية كتذكارات مميزة. دعونا ندعم إبداع نبيلة في الحفاظ على التراث الثقافي لمقاطعة لامبونغ وتحديثه.","Welcome to Nabilla, a fashion house specializing in Usus Embroidery, a representative of the rich cultural heritage of Lampung Province. This business has focused on producing haute couture and ready-to-wear fashion since 2005, elevating the artistic value of local heritage. Nabilla's products are renowned for their high quality and have successfully brought traditional Lampung fabrics to the national and international stage. Here, you can experience the beauty of the embroidery details, learn about the process, and purchase authentic garments as special souvenirs. Let's support Nabilla's creativity in preserving and modernizing Lampung's cultural heritage.","Welkom bij Nabilla, een modehuis gespecialiseerd in ususborduurwerk en een voorbeeld van het rijke culturele erfgoed van de provincie Lampung. Dit bedrijf richt zich sinds 2005 op de productie van haute couture en prêt-à-portermode en benadrukt daarmee de artistieke waarde van het lokale erfgoed. De producten van Nabilla staan ​​bekend om hun hoge kwaliteit en hebben met succes traditionele Lampung-stoffen op de nationale en internationale markt gebracht. Hier kunt u de schoonheid van de borduurdetails ervaren, meer leren over het proces en authentieke kledingstukken kopen als bijzondere souvenirs. Steun samen Nabilla's creativiteit bij het behoud en de modernisering van Lampungs culturele erfgoed.","欢迎来到Nabilla，一家专注于乌苏斯刺绣的时尚品牌，乌苏斯刺绣是楠榜省丰富文化遗产的代表。自2005年以来，Nabilla一直致力于高级定制和成衣的制作，提升当地传统文化的艺术价值。Nabilla的产品以其卓越的品质而闻名，并成功地将楠榜传统面料推向了国内外的舞台。在这里，您可以欣赏精美的刺绣细节，了解刺绣工艺，并购买正宗的服饰作为特别的纪念品。让我们共同支持Nabilla的创意，共同保护和传承楠榜的文化遗产。",""],"Skip":["يتخطى","","Overslaan","跳过",""],"Tentang Kami":["معلومات عنا","About Us","Over ons","关于我们",""],"UMKM Nabila":["","","","纳比拉的中小微企业",""],"X":["","","","",""],"_custom":["","","","",""]}})
	if (!player.languageSet) player.setLanguage(window.navigator.language);
};