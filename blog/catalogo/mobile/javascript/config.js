	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="000000";bookConfig.appLogoIcon="../files/mobile-ext/logo.png";bookConfig.appLogoLinkURL="https://foodpaperportugal.com/";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="https://foodpaperportugal.com/";bookConfig.appLogoOpenWindow="Self";bookConfig.toolbarColor="000000";bookConfig.iconColor="#000000";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#000000";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [{"name":"Facebook","url":"https://www.facebook.com/search/top/?q=foodpapert","logo":"./files/mobile-ext/shares/facebook.png","title":"Facebook"},{"name":"Linkedin","url":"https://www.linkedin.com/in/food-paper-food-packaging-laboratory-a38001b9/","logo":"./files/mobile-ext/shares/linkedin.png","title":"Linkedin"},{"name":"Instagram","url":"https://www.instagram.com/foodpaperportugal/","logo":"./files/mobile-ext/shares/Instagram.png","title":"Instagram"}];bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="100";bookConfig.ZoomButtonVisible="Show";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.bookmarkBackground="0000000";bookConfig.bookmarkFontColor="#000000";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.bgBeginColor="#1F2232";bookConfig.bgEndColor="#1F2232";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.webp";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.showDoublePage="Yes";bookConfig.topMargin="120";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=22;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1002;;bookConfig.securityType="1";bookConfig.bookTitle="Food Paper Portugal - Papel, Embalagens e Packaging Alimentar";bookConfig.productName="Flip PDF";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/search_config.js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "Portugues",btnFirstPage:"Primeira página",btnNextPage:"Página seguinte",btnLastPage:"Última página",btnPrePage:"Página anterior",btnDownload:"Transferir",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Limpar",btnBookMark:"Menu",btnHelp:"Ajuda",btnHome:"Home",btnFullScreen:"Ativar tela cheia",btnDisableFullScreen:"Desativar tela cheia",btnSoundOn:"Som ligado",btnSoundOff:"Som desligado",btnShareEmail:"Fallow us",btnSocialShare:"Fallow us",btnZoomIn:"Ampliar",btnZoomOut:"Reduzir",btnDragToMove:"Mover ao arrastar o mouse",btnAutoFlip:"Virar automaticamente",btnStopAutoFlip:"Parar de virar automaticamente",btnGoToHome:"Voltar ao começo",frmHelpCaption:"Ajuda",frmHelpTip1:"Duplo clique para ampliar ou reduzir",frmHelpTip2:"Arrastar o canto da página para visualizar",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas as páginas",frmPrintPrintCurrentPage:"Imprimir página atual",frmPrintPrintRange:"Intervalo de páginas",frmPrintExampleCaption:"Ex.: 2,5,8-26",frmPrintPreparePage:"Preparando páginas:",frmPrintPrintFailed:"Erro ao Imprimir:",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",loginCaption:"Iniciar sessão",loginInvalidPassword:"Senha incorreta",loginPasswordLabel:"Senha:",loginBtnLogin:"Ingressar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Sobre",frnAboutCaption:"Sobre e contato",btnSinglePage:"Página simples",btnDoublePage:"Página dupla",btnSwicthLanguage:"Alterar idioma",tipChangeLanguage:"Selecione um idioma abaixo...",btnMoreOptionsLeft:"Mais opções",btnMoreOptionsRight:"Mais opções",btnFit:"Ajustar à janela",smallModeCaption:"Clique para visualizar em tela cheia",btnAddAnnotation:"Adicionar anotações",btnAnnotation:"Anotações",FlipPageEditor_SaveAndExit:"Salvar e sair",FlipPageEditor_Exit:"Sair",DrawToolWindow_Redo:"Refazer",DrawToolWindow_Undo:"Desfazer",DrawToolWindow_Clear:"Limpar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Largura",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Cor",DrawToolWindow_Eraser:"Borracha",DrawToolWindow_Rectangular:"Retângulo",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Largura da borda",TStuff_BorderAlph:"Transparência da borda",TStuff_BorderColor:"Cor da borda",DrawToolWindow_TextNote:"Nota de texto",AnnotMark:"Marcador de livro",lastpagebtnHelp:"Última página",firstpagebtnHelp:"Primeira página",homebtnHelp:"Retornar à página inicial",aboubtnHelp:"Sobre",screenbtnHelp:"Abrir este aplicativo no modo de tela cheia",helpbtnHelp:"Mostrar Ajuda",searchbtnHelp:"Busca de páginas",pagesbtnHelp:"Dê uma olhada na miniatura deste livreto",bookmarkbtnHelp:"Abrir marcador",AnnotmarkbtnHelp:"Abrir índice",printbtnHelp:"Imprimir o livreto",soundbtnHelp:"Ligar ou desligar o som",sharebtnHelp:"Enviar por e-mail",socialSharebtnHelp:"Compartilhar",zoominbtnHelp:"Ampliar",downloadbtnHelp:"Transferir este livreto",pagemodlebtnHelp:"Alternar modo de página simples e dupla",languagebtnHelp:"Aternar idioma",annotationbtnHelp:"Adicionar anotação",addbookmarkbtnHelp:"Adicionar marcador",removebookmarkbtnHelp:"Remover marcador",updatebookmarkbtnHelp:"Atualizar marcador",btnShoppingCart:"Carrinho de compra",Help_ShoppingCartbtn:"Carrinho de compra",Help_btnNextPage:"Página seguinte",Help_btnPrePage:"Página anterior",Help_btnAutoFlip:"Virar automaticamente",Help_StopAutoFlip:"Parar de virar automaticamente",btnaddbookmark:"Adicionar",btndeletebookmark:"Apagar",btnupdatebookmark:"Atualizar",frmyourbookmarks:"Seus marcadores",frmitems:"itens",DownloadFullPublication:"Publicação completa",DownloadCurrentPage:"Página atual",DownloadAttachedFiles:"Arquivos anexos",lblLink:"Etiqueta do link para compartilhar",btnCopy:"Botão copiar",restorePage:"Você gostaria de restaurar a sessão anterior?",tmpl_Backgoundsoundon:"Ativar som de fundo",tmpl_Backgoundsoundoff:"Desativar som de fundo",tmpl_Flipsoundon:"Ativar som ao virar",tmpl_Flipsoundoff:"Desativar som ao virar",Help_PageIndex:"Número de página atual",tmpl_PrintPageRanges:"INTERVALOS DE PÁGINA",tmpl_PrintPreview:"VISUALIZAÇÃO",btnSelection:"Selecionar texto",loginNameLabel:"Nome:",btnGotoPage:"Ir",btnSettings:"Configurações",soundSettingTitle:"Configurar som",closeFlipSound:"Fechar som ao virar",closeBackgroundSound:"Fechar som de fundo",frmShareCaption:"Fallow us",frmShareLinkLabel:"ligação:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartilhar na rede social",TAnnoActionPropertyStuff_GotoPage:"Ir para página",btnPageBack:"Anterior",btnPageForward:"Seguinte",SelectTextCopy:"Copiar texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrinho de compras",TStuffCart_DetailedQuantity:"Quantidade",TStuffCart_DetailedPrice:"Preço",ShappingCart_Close:"Fechar",ShappingCart_CheckOut:"Verificar",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Adicionar ao carrinho",ShappingCart_InStock:"Em estoque",TStuffCart_DetailedCost:"Custo de frete",TStuffCart_DetailedTime:"Tempo de entrega",TStuffCart_DetailedDay:"dia(s)",ShappingCart_NotStock:"Não o suficiente em estoque",btnCrop:"Cortar",btnDragButton:"Arrastar",btnFlipBook:"Virar livro",btnSlideMode:"Modo deslizante",btnSinglePageMode:"Modo de página simples",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Fechar",btnDoublePage:"Página dupla",btnBookStatus:"Visualizar livro",checkBoxInsert:"Inserir página atual",lblLast:"Esta é a última página.",lblFirst:"Esta é a primeira página.",lblFullscreen:"Clique para visualizar em tela cheia",lblName:"Nome",lblPassword:"Senha",lblLogin:"Ingressar",lblCancel:"Cancelar",lblNoName:"O nome do usuário não pode estar vazio.",lblNoPassword:"A senha não pode estar vazia.",lblNoCorrectLogin:"Digite corretamente o nome de usuário e senha.",btnVideo:"Galeria de vídeos",btnSlideShow:"Apresentação",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",btnDragToMove:"Mover ao arrastar o mouse",btnPositionToMove:"Mover ao posicionar o mouse",lblHelp1:"Arraste o canto da página para visualizar",lblHelp2:"Duplo clique para ampliar ou reduzir",lblCopy:"Copiar",lblAddToPage:"adicionar à página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Apagar",lblRemoveAll:"Remover tudo",tltCursor:"cursor",tltAddHighlight:"adicionar realce",tltAddTexts:"adicionar textos",tltAddShapes:"adicionar formas",tltAddNotes:"adicionar notas",tltAddImageFile:"adicionar arquivo de imagem",tltAddSignature:"adicionar assinatura",tltAddLine:"adicionar linha",tltAddArrow:"adicionar seta",tltAddRect:"adicionar retângulo",tltAddEllipse:"adicionar círculo",lblDoubleClickToZoomIn:"Duplo clique para ampliar.",frmShareCaption:"Fallow us",frmShareLabel:"Fallow us",frmShareInfo:"Você pode facilmente compartilhar esta publicação nas redes sociais. Basta clicar no botão apropriado abaixo.",frminsertLabel:"Inserir para o site",frminsertInfo:"Use o código abaixo para incorporar esta publicação para o seu site.",btnQRCode:"Clique para ler o código QR",btnRotateLeft:"Vire à esquerda",btnRotateRight:"Vire à direita"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]};
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
