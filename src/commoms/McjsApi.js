/**
 * Created by lvjiaxi on 2017/2/8.
 * webview浜や簰榄旀极鐩告満瀹㈡埛绔�
 * Version锛�2.2.6
 * Update Time锛�2017-05-24 11:31
 */

var mcAPI = {
    "isIOS":false,
    //杩炴帴妗ワ紝蹇呴』鍦ㄥ垵濮嬪寲API鏃惰缃ソ锛�
    "jsBridge":window.jsObj,

    /**
     * 鑾峰彇鐢ㄦ埛鐧婚檰鐘舵€�
     * @param callback 杩斿洖bool鍊� true / false
     */
    "isLogin":function(callback) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            this.mIsLoginCallback = callback;
            var params={
                callbackName:"client_IsLoginCallback"
            };

            iOS_schema_call("isUserLogin", params);
        }
        else {
            callback(this.jsBridge.isUserLogin());
        }
    },
    /**
     * 鐧婚檰
     * @param callback 鐧婚檰瀹屾垚鍚庣殑鍥炶皟 杩斿洖鐢ㄦ埛token
     */
    "login":function(callback) {
        this.mLoginCallback = callback;
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                callbackName:"client_LoginUserCallback"
            };

            iOS_schema_call("loginUser", params);
        }
        else {
            this.jsBridge.loginUser("client_LoginUserCallback");
        }
    },
	/**
     * 浠ヤ笅鏄拰缃戦〉璋冪敤鍙樻垚鑷繁鎵€璋冪敤鐨勬帴鍙�
     * 1.璋冪敤鎺ュ彛娓叉煋鍥剧墖鐨勬椂鍊�,浼氫紶杩囨潵鐩稿簲鐨勫弬鏁帮紝璋冪敤鎺ュ彛renderBitmapByInfo
     * 2.銆愬彉鎴愯嚜宸便€戣皟鐢╳ebChangeSelfComic 浼犵浉鍚岀殑鍙傛暟
     * @param jsonStr 鍙傛暟
     */
    "initHead":function(jsonStr) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                jsonStr:jsonStr
            };

            iOS_schema_call("initHead", params);
        }
        else {
            this.jsBridge.initHead(jsonStr);
        }
    },
    /**
     * 娓叉煋婕敾寮傛璁剧疆婕敾
     * @param resID 婕敾缂栧彿
     * @param callback 娓叉煋瀹屾垚鍚庣殑鍥炶皟 鍥炶皟鏍煎紡鍙傝client_RenderCallback
     */
    "renderComic":function(resID, callback) {
        this.mRenderCallback = callback;
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                resID:resID,
                callbackName:"client_RenderCallback"
            };

            iOS_schema_call("renderComic", params);
        }
        else {
            this.jsBridge.renderComic(resID, "client_RenderCallback");
        }
    },
	/**
     * 婕敾缂╂斁瑁佸壀鏃嬭浆鍚庯紝鍐嶅洓鐐瑰悎鎴�
     * @param ResourceType 璧勬簮绫诲瀷
	 * @param webComicInfoStr 婕敾鍙傛暟 {"CartoonCode":"00601004900400","SortID":"wrap0","ComicSortID":1,"UserImagePath":"","ImageChangeArg":{"OldWidth":"400","NewWidth":"400","OldHeight":"565","NewHeight":"565","PointX":"0","PointY":"0","Width":"400","Height":"565","Rotate":0},"ImagePath":"http://production.manboker.com/p_kB5CIlyMZK_600-1067.png","BkgdPath":"http://production.manboker.com/p_cNAxGlyMZK_600-1067.jpg","FourPoints":["41,271","489,278","26,904","507,901"],"ShowType":3,"WebComicHeadFaceUIDs":[{"HeadIndex":1,"FaceUID":"94986b56-fc52-4a7f-ab06-4cd000ab80c1"},{"HeadIndex":2,"FaceUID":"94986b56-fc52-4a7f-ab06-4cd000ab80c1"},{"HeadIndex":3,"FaceUID":"94986b56-fc52-4a7f-ab06-4cd000ab80c1"}]}
     * @param callback 娓叉煋瀹屾垚鍚庣殑鍥炶皟 鍥炶皟鏍煎紡鍙傝client_RenderCallback {"BitampPath":"MC_FILE:///storage/emulated/0/Android/data/com.manboker.headportrait/cache/EcommerceResCache/a4f34f89-f2c0-4973-91da-af3324932869","ComicFaceUID":{"ComicSortID":-1,"headMap":[{"faceUID":"f3534648-fdac-485e-819f-89104bd44dd6","headIndex":1,"headUID":"MCH_0e73f5ef-31bd-4a0c-af24-bc21ce3aace0"},{"faceUID":"440b38e1-b841-4664-b5ee-4d92413fda88","headIndex":2,"headUID":"02dad380-7d57-48a2-a4e5-bd54907bc2d9"},{"faceUID":"733b9763-1a84-4b61-b24e-d194e9573780","headIndex":3,"headUID":"2fc919a8-ed18-4811-be43-e36143d7c7fb"}],"resID":"00601004900400"},"sortID":"wrap0"}
     */
    "renderBitmapByInfo":function(ResourceType, webComicInfoStr, callback) {
        this.mRenderCallback = callback;
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                ResourceType:ResourceType,
				webComicInfoStr:webComicInfoStr,
                callbackName:"client_RenderCallback"
            };

            iOS_schema_call("renderBitmapByInfo", params);
        }
        else {
            this.jsBridge.renderBitmapByInfo(ResourceType, webComicInfoStr, "client_RenderCallback");
        }
    },
	/**
     * 鍙樻垚鑷繁
     * @param jsonStr 婕敾淇℃伅Json涓瞷"CartoonCode":"00601004900400","SortID":"wrap0","ComicSortID":1,"UserImagePath":"","ImageChangeArg":{"OldWidth":"400","NewWidth":"400","OldHeight":"565","NewHeight":"565","PointX":"0","PointY":"0","Width":"400","Height":"565","Rotate":0},"ImagePath":"http://production.manboker.com/p_kB5CIlyMZK_600-1067.png","BkgdPath":"http://production.manboker.com/p_cNAxGlyMZK_600-1067.jpg","FourPoints":["41,271","489,278","26,904","507,901"],"ShowType":3,"WebComicHeadFaceUIDs":[{"HeadIndex":1,"FaceUID":"94986b56-fc52-4a7f-ab06-4cd000ab80c1"},{"HeadIndex":2,"FaceUID":"94986b56-fc52-4a7f-ab06-4cd000ab80c1"}]}
     * @param callback 缇庡瀹屾垚鐨勫洖璋� 鍥炶皟鏍煎紡鍙傝client_ChangeSelfCallback {"BitampPath":"MC_FILE:///storage/emulated/0/Android/data/com.manboker.headportrait/cache/EcommerceResCache/a4f34f89-f2c0-4973-91da-af3324932869","ComicFaceUID":{"ComicSortID":-1,"headMap":[{"faceUID":"f3534648-fdac-485e-819f-89104bd44dd6","headIndex":1,"headUID":"MCH_0e73f5ef-31bd-4a0c-af24-bc21ce3aace0"},{"faceUID":"440b38e1-b841-4664-b5ee-4d92413fda88","headIndex":2,"headUID":"02dad380-7d57-48a2-a4e5-bd54907bc2d9"},{"faceUID":"733b9763-1a84-4b61-b24e-d194e9573780","headIndex":3,"headUID":"2fc919a8-ed18-4811-be43-e36143d7c7fb"}],"resID":"00601004900400"},"sortID":"wrap0"}
     */
    "webChangeSelfComic":function(jsonStr, callback) {
        this.mChangeSelfCallback = callback;

        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                jsonStr:jsonStr,
                callbackName:"client_ChangeSelfCallback"
            };

            iOS_schema_call("webChangeSelfComic", params);
        }
        else {
            this.jsBridge.webChangeSelfComic(jsonStr, "client_ChangeSelfCallback");
        }
    },
    /**
     * 缃戦〉鍒嗕韩
     * @param linkUrl URL鍦板潃
     * @param iconUrl 鍥剧墖鍦板潃锛屼竴浜涘垎浜钩鍙板彲浠ユ樉绀轰竴寮犲浘鐗�
     * @param titleStr 鍒嗕韩鏍囬
     * @param descStr 鍒嗕韩鍐呭
     */
    "shareUrl":function(linkUrl, iconUrl , titleStr, descStr) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                iconUrl:iconUrl,
                linkUrl:linkUrl,
                titleStr:titleStr,
                descStr:descStr
            };

            iOS_schema_call("shareUrlFromWeb", params);
        }
        else {
            this.jsBridge.shareUrlFromWeb(iconUrl, linkUrl, titleStr, descStr);
        }
    },
    /**
     * 鐢熸垚婕敾FaceUID鐨勬槧灏勫叧绯�
     * @param resIDs 婕敾缂栧彿
     * @param callback 缇庡瀹屾垚鐨勫洖璋� 鍥炶皟鏍煎紡鍙傝client_CartoonFaceMapCallback
     */
    "createCartoonFaceMap":function(resIDs, callback) {
        this.mCartoonFaceMapCallback = callback;

        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                resIDs:resIDs,
                callbackName:"client_CartoonFaceMapCallback"
            };

            iOS_schema_call("createCartoonFaceMap", params);
        }
        else {
            this.jsBridge.createCartoonFaceMap(resIDs, "client_CartoonFaceMapCallback");
        }
    },
    /**
     * 鏀粯
     * @param currencyCode 璐у竵鐮�
     * @param amount 浠锋牸
     * @param orderInfoStr 璁㈠崟淇℃伅
     * @param payType 鏀粯绫诲瀷锛屾殏鏃跺彧鏀寔锛�1銆佸井淇★紝2銆佹敮浠樺疂
     * @param callback 瀹屾垚鍥炶皟 鍥炶皟鏍煎紡鍙傝client_PaymentCallback
     */
    "pay":function(currencyCode, amount, orderInfoStr, payType, callback) {
        this.mPaymentCallback = callback;

        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                currencyCode:currencyCode,
                amount:amount,
                orderInfoStr:orderInfoStr,
                payType:payType,
                callbackName:"client_PaymentCallback"
            };

            iOS_schema_call("payOrder", params);
        }
        else {
            this.jsBridge.payOrder(currencyCode, amount, orderInfoStr, payType, "client_PaymentCallback");
        }
    },
    /**
     * 鎵撳紑鏂伴〉闈�
     * @param url鏂伴〉闈㈠湴鍧€
     */
    "openNewPage":function(url) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                url:url
            };

            iOS_schema_call("openPublicHtmlActivity", params);
        }
        else {
            this.jsBridge.openPublicHtmlActivity(url);
        }
    },
	/**
     * 鎵撳紑鏂伴〉闈�(鏄惁鏄剧ず鏍囬鏍�)
     * @param url鏂伴〉闈㈠湴鍧€
	 * @param typeStr锛欴EFAULT_TYPE锛堜笉鏄剧ず鏍囬鏍忥級锛汥EFAULT_TITLE_TYPE锛堟樉绀烘爣棰樻爮锛�
     */
    "openNewTitlePage":function(url, typeStr) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                url:url,
				typeStr:typeStr
            };

            iOS_schema_call("openPublicHtmlActivityWithType", params);
        }
        else {
            this.jsBridge.openPublicHtmlActivityWithType(url, typeStr);
        }
    },
    /**
     * 鎵撳紑棣栭〉鐢靛晢
     */
    "openProductPage":function() {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            iOS_schema_call("openProductPage", null);
        }
        else {
            this.jsBridge.openProductPage();
        }
    },
	/**
     * 杩涘叆璁㈠崟璇︽儏
     */
    "openOrderConfirmPage":function(orderID) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
			var params={
                orderID:userIntID
            };
            iOS_schema_call("openOrderConfirmPage", params);
        }
        else {
            this.jsBridge.openOrderConfirmPage(orderID);
        }
    },
    /**
     * 杩涘叆涓汉绌洪棿(濡傛灉褰撳墠鏈櫥褰曞垯return)
     */
    "openSpecificSpacePage":function() {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            iOS_schema_call("openSpecificSpacePage", null);
        }
        else {
            this.jsBridge.openSpecificSpacePage();
        }
    },
    /**
     * 杩涘叆涓汉绌洪棿
     * @param userIntID 鐢ㄦ埛ID锛屾暣鏁板舰寮�
     */
    "openSpecificSpacePageById":function(userIntID) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                userIntID:userIntID
            };

            iOS_schema_call("openSpecificSpacePageById", params);
        }
        else {
            this.jsBridge.openSpecificSpacePageById(userIntID);
        }
    },
    /**
     * 杩涘叆涓汉绌洪棿
     * @param userUID 鐢ㄦ埛UID锛屽瓧绗︿覆褰㈠紡
     */
    "openSpecificSpacePageByUID":function(userUID) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                userUID:userUID
            };

            iOS_schema_call("openSpecificSpacePageByStringUid", params);
        }
        else {
            this.jsBridge.openSpecificSpacePageByStringUid(userUID);
        }
    },
    /**
     * 杩涘叆涓汉涓績椤甸潰锛堣缃〉闈級
     */
    "openPersonalCenterPage":function() {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            iOS_schema_call("openPersonalCenterPage", null);
        }
        else {
            this.jsBridge.openPersonalCenterPage();
        }
    },
    /**
     * 杩涘叆瀹㈡湇椤甸潰(濡傛灉褰撳墠鏈櫥褰曞垯return锛�
     */
    "openCustomService":function() {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            iOS_schema_call("openCustomerServicePage", null);
        }
        else {
            this.jsBridge.openCustomerServicePage();
        }
    },
    /**
     * 杩涘叆鍟嗗搧璇︽儏
     * @param productId 鍟嗗搧ID
     */
    "openProductDetail":function(productId) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
                productId:productId
            };

            iOS_schema_call("entryCustomProductActivity", params);
        }
        else {
            this.jsBridge.entryCustomProductActivity(productId);
        }
    },
    /**
     * 鑾峰彇褰撳墠瀹㈡埛绔俊鎭�
     * @params callback {String}锛坽"country":"CN","ip":"10.0.2.15","language":"zh","platform":"Android/iOS","version":"3.3.10"}锛�
     */
    "getClientInfo":function(callback) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            this.mClientInfoCallback = callback;
            var params={
                callbackName:"client_ClientInfoCallback"
            };

            iOS_schema_call("getClientInfo", params);
        }
        else {
            callback(this.jsBridge.getClientInfo());
        }
    },
    /**
     * 鍏抽棴褰撳墠椤甸潰锛堝鎴风杩斿洖涓婁竴涓〉闈級
     */
    "clientFinish":function() {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            iOS_schema_call("clientFinish", null);
        }
        else {
            this.jsBridge.clientFinish();
        }
    },
	/**
     * 鎵撳紑鍔犺浇鍔ㄧ敾
	 * msg 鏄剧ず鏂囨湰
     */
    "showloading":function(msg) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
			var params={
				msg:msg
            };
            iOS_schema_call("showloading", params);
        }
        else {
            this.jsBridge.showloading(msg);
        }
    },
    /**
     * 鍏抽棴鍔犺浇鍔ㄧ敾锛堝鏋滄湁锛�
     */
    "finishloading":function() {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            iOS_schema_call("finishloading", null);
        }
        else {
            this.jsBridge.finishloading();
        }
    },
   /**
	 * 鏍囬鏍忔帶鍒讹紙鏄剧ず涓庡惁锛屾寚瀹氳繑鍥烇紝鍙充晶鍒嗕韩锛岀偣鍑诲洖璋冿級
	 */
	"hasClientTitle":function(ifHasTitle, jsonParam, callBack) {
		if(callBack){
			this.mClientTitleCallback = callBack;
			if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
				var params={
					ifHasTitle:ifHasTitle,
					jsonParam:jsonParam,
					callbackName:"client_ClientTitleCallback"
				};
				iOS_schema_call("hasClientTitle", params);
			}
			else {
				this.jsBridge.hasClientTitle(ifHasTitle, jsonParam, "client_ClientTitleCallback");
			}
		}
		else
		{
			if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
				var params={
					ifHasTitle:ifHasTitle,
					jsonParam:jsonParam
				};
				iOS_schema_call("hasClientTitle", params);
			}
			else {
				this.jsBridge.hasClientTitle(ifHasTitle, jsonParam);
			}
		}


	},
	/**
     * 鑾峰彇褰撳墠鐧诲綍鐢ㄦ埛淇℃伅
     * @params callback {String}锛坽"userIntID":89022,"userToken":"3vVB5vINs4qiFesObpUbzLfRVSU_CN","userType":"","userUID":"49ead077-8a7a-4048-9295-d2c0b93b0f65"}锛�
     */
    "getUserInfo":function(callback) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            this.mUserInfoCallback = callback;
            var params={
                callbackName:"client_UserInfoCallback"
            };

            iOS_schema_call("getUserInfo", params);
        }
        else {
            callback(this.jsBridge.getUserInfo());
        }
    },
	/**
     * 娓稿寮瑰嚭缁戝畾
	 * 杩斿洖RESULT_LOGIN_TYPE_USER = 0x0005鏅€氱敤鎴凤紱RESULT_LOGIN_TYPE_VISIT = 0x0006 娓稿鐢ㄦ埛
	 * @param must 鏄惁蹇呴』缁戝畾
     * @param callback 鍥炶皟
     */
    "visitUserBindPhone":function(must, callback) {
        this.mUserBindPhoneCallback = callback;
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            var params={
				must:must,
                callbackName:"client_UserBindPhoneCallback"
            };

            iOS_schema_call("visitUserBindPhone", params);
        }
        else {
            callback(this.jsBridge.visitUserBindPhone(must, "client_UserBindPhoneCallback"));
        }
    },
	/**
     * 鎵撳紑璐墿杞�
     */
    "openCartListActivity":function() {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
            iOS_schema_call("openCartListActivity", null);
        }
        else {
            this.jsBridge.openCartListActivity();
        }
    }
}
export default mcAPI;
/**
 * 瀹㈡埛绔覆鏌撳畬鎴愬洖璋�
 * @param renderResult Android鍥炶皟鐨勬槸涓€涓嚜瀹氫箟鍦板潃锛岀敤鏉ュ湪webview鍔犺浇鐨勬椂鍊欒嚜宸辫鍙栨湰鍦板浘鐗囥€俰OS鍙兘鏄痓ase64鐨勫浘鐗囧湴鍧€
 */
function client_RenderCallback(renderResult) {
    mcAPI.mRenderCallback(renderResult);
}

/**
 * 瀹㈡埛绔敮浠樺畬鎴愬洖璋�
 * @param paymentResult 涓€涓猨son瀵硅薄 鐢眘tatus锛坕nt锛夊拰result锛圫tring锛夌粍鎴�
 */
function client_PaymentCallback(paymentResult) {
    mcAPI.mPaymentCallback(paymentResult);
}

function client_LoginUserCallback(userToken) {
    mcAPI.mLoginCallback(userToken);
}

function client_ChangeSelfCallback(changeResult) {
    mcAPI.mChangeSelfCallback(changeResult);
}

function client_CartoonFaceMapCallback(result) {
    mcAPI.mCartoonFaceMapCallback(result);
}

function client_ClientInfoCallback(clientInfo) {
    mcAPI.mClientInfoCallback(clientInfo);
}

function client_IsLoginCallback(isLogin) {
    mcAPI.mIsLoginCallback(isLogin);
}

function client_UserInfoCallback(userInfo) {
    mcAPI.mUserInfoCallback(userInfo);
}

function client_UserBindPhoneCallback(result) {
    mcAPI.mUserBindPhoneCallback(result);
}

function client_ClientTitleCallback(result) {
    mcAPI.mClientTitleCallback(result);
}

function iOS_schema_call(funcName, objMap) {
    var ocRedriect = funcName + "://doAction?";
    if(objMap) {
        for(var prop in objMap){
            if(objMap.hasOwnProperty(prop)){
                ocRedriect += prop + "=" + encodeURIComponent(objMap[prop]) + "&";
                //console.log('key is ' + prop +' and value is' + map[prop]);
            }
        }
    }
    else{
        ocRedriect += "void=void&";
    }
    if(ocRedriect.lastIndexOf("&") == ocRedriect.length - 1) {
        ocRedriect = ocRedriect.substring(0, ocRedriect.length);
    }

        var iframe = document.createElement("IFRAME");
        iframe.setAttribute("src", ocRedriect);
        document.documentElement.appendChild(iframe);
        iframe.parentNode.removeChild(iframe);
        iframe = null;

    //return document.location=ocRedriect;
}
