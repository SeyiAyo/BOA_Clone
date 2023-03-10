/*$Id: eluminate-borneo-10416859-90010394-01122015.txt 218422 2016-08-23 18:01:33Z cterrell $*/

/**
 * Change log:
 *  - 2018-10-05 (C. Capps): Added: to C6, for PV tags to add the pageID to window.digitalData if there is not a pageID in page.pageInfo[0].pageID
 *  - 2017-08-02 (J. Hodges): Removed: this.onload = cK(this, "onload", this.onload, "cY(e)", cY);
 *                            Added logic to cX function to track which cm_sp values have already had impressions called.
 *                            Added window.bactm_cXExecuting to cX function.
 * 
 */

if (!cGB) {
    var cGB = true;
    if (!cm_ClientID) {
        var cm_ClientID = "60010394";
    }
    if (!cm_HOST) {
        var cm_HOST = "testdata.coremetrics.com/cm?";
    }
    if (!cm_ClientTS) {
        var dt = new Date();
        var cm_ClientTS = dt.getTime();
    }
    if (!cm_TrackLink) {
        var cm_TrackLink = "A";
    }
    if (!cm_DelayHandlerReg) {
        var cm_DelayHandlerReg = "F";
    }
    if (!cm_SkipHandlerReg) {
        var cm_SkipHandlerReg = "";
    }
    if (!cm_TrackTime) {
        var cm_TrackTime = false;
    }
    if (!cm_TrackImpressions) {
        var cm_TrackImpressions = "S";
    }
    if (!cm_SecureTags || cm_SecureTags == null) {
        var cm_SecureTags = "|2|3|";
    }
    if (!cm_FirstPartyDetect) {
        var cm_FirstPartyDetect = false;
    }
    if (!cm_DownloadExtensions) {
        var cm_DownloadExtensions = null;
    }
    if (!cm_UseUTF8) {
        var cm_UseUTF8 = false;
    }
    if (!cm_FormError) {
        var cm_FormError = "";
    }
    if (!cm_FormPageID) {
        var cm_FormPageID = false;
    }
    if (cm_UseCookie == null) {
        var cm_UseCookie = true;
    }
    if (!cm_TimeoutSecs) {
        var cm_TimeoutSecs = 15;
    }
    if (!cm_OffsiteImpressionsEnabled) {
        var cm_OffsiteImpressionsEnabled = false;
    }
    if (!cm_AvidHost) {
        var cm_AvidHost = "data.cmcore.com/cookie-id3366.js?fn=cmSetAvid";
    }
    var cm_AvidLoadTimedOut = false;
    if (!cmUA) {
        var cmUA = new Object();
        cmUA["MSIE"] = 2083;
    }
    if (!cmDefaultLimit) {
        var cmDefaultLimit = 8197;
    }
    if (cGQ == null) {
        var cGQ = true;
    }
    if (!cGO) {
        var cGO = 1024;
    }
    if (!cGR) {
        var cGR = 600000;
    }
    if (!encodeURIComponent) {
        var encodeURIComponent = null;
    }
    var cG8;
    var cG8Index;
    var cG6 = document;
    var cGT;
    var cG7 = new _cG7();
    cG6.cmTagCtl = cG7;
    var CI = cmStartTagSet;
    var CJ = cmSendTagSet;
    var cG1 = 0;
    var cm_CheckOnSubmit = false;
    var cG0 = new Array("vn1", "vn2", "st", "pi", "rs", "ec", "rf", "ul");
    var cmLastPageID = null;
    var cGA = null;
    var cmMigrationDisabled = 0;
    var cmMigrationFrom1p_CM = 1;
    var cmMigrationFrom1p_SA = 2;
    var cmValidFlag_SessionContinue = 1;
    var cmValidFlag_NewSession = 2;
    var cmValidFlag_NewVisitor = 4;
    var cmValidFlag_SessionReset = 32;
    var cmSACookieName = "sauid";
    var cmSpecCookieNames = "";
    var cmSpecCookieValues = "";
    var cmSpecCookiesCount = 0;
    if (!cG4) {
        var cG4 = 5000;
    }
    if (!cG5) {
        var cG5 = 200;
    }
    var cG2 = new Object();
    var cG3 = new Object();
    var cGM = navigator.appVersion;
    var cGN = navigator.userAgent;
    var cGS = cGN.indexOf("Opera") >= 0;
    var cGU = cGN.indexOf("Safari") >= 0;
    var cmT2 = -1;
    var cmT3 = -1;
    var cGC = "";
    var cGD = "";
    var cGE = "";
    var cGF = "";
    var cGG = "";
    var cGH = "";
    var cmSubmitFlag = false;
    var cmFormC1 = "submitbuttonreset";
    var cmFormC2 = "textpasswordtextarea";
    var cmFormC3 = "select-oneselect-multiple";
    var cGI = "";
    var cGJ = "";
    var cGK = "";
    var cGL = "";
    var chost = null;
    var cci = null;
    CI();
    var dt = new Date();
    var cmYearOffset = 0;
    if (dt.getFullYear) cmYearOffset = dt.getFullYear();
    else {
        cmYearOffset = dt.getYear();
        if (cmYearOffset < 1900) cmYearOffset += 1900;
    }
    dt.setYear(cmYearOffset + 15);
    var cmCookieExpDate = dt.toGMTString();
    if (cm_UseCookie) {
        var pi = cI("cmRS", "pi", "");
        if (pi != "") cmLastPageID = pi;
        chost = cm_HOST;
        cm_HOST = cI("cmRS", "ho", chost);
        cci = cm_ClientID;
        cm_ClientID = cI("cmRS", "ci", cci);
        var cT3 = cI("cmRS", "t3", "");
        if (cT3 != "") {
            cGA = cT3;
        }
        var cT1 = cI("cmRS", "t1", "");
        if (cT1 != "" && (!cGA || cm_ClientTS - cGA < cGR)) {
            cmAddShared("st", cT1);
            var ul = cI("cmRS", "ul", "");
            var rf = cI("cmRS", "rf", "");
            var cT2 = cI("cmRS", "t2", "");
            var cT4 = cI("cmRS", "t4", "");
            if (cm_TrackTime) cN(cT1, cT2, cT3, cT4, true, pi);
            var hr = cI("cmRS", "hr", "");
            if (hr != "") {
                var ti = cI("cmRS", "lti", "");
                if (cm_ClientTS - ti < cGR) {
                    var nm = cI("cmRS", "ln", "");
                    cM(cT1, ti, nm, hr, true, pi, ul, rf);
                }
            }
            var cV6 = cI("cmRS", "ac", "");
            var cV7 = cI("cmRS", "fd", "");
            if ((cV6 != "") || (cV7 != "")) {
                var ti = cI("cmRS", "fti", "");
                if (cm_ClientTS - ti < cGR) {
                    var cV9 = cI("cmRS", "fn", "");
                    var cV0 = cI("cmRS", "fu", "");
                    cL(cT1, ti, cV9, cV6, cV0, cV7, true, pi, ul, rf);
                }
            }
            var cError = unescape(cI("cmRS", "uer", ""));
            CH(cT1, cT3, cError, true, pi);
        }
        CC("cmRS");
    }
    if (!cGS && (cF(4) || CD(5))) {
        this.onunload = cK(this, "onunload", this.onunload, "cZ(e)", cZ);
        if (cm_DelayHandlerReg.indexOf("L") == -1) window.cX("main");
        if (cm_DelayHandlerReg.indexOf("F") == -1) cU();
    }
    CJ(1);
    if (cm_OffsiteImpressionsEnabled) {
        var cm_Avid = cI("CMAVID");
        if (cm_Avid == null) {
            document.write("<script src='" + C8(null) + "//" + cm_AvidHost + "' language='javascript1.1' type='text/javascript'></script>");
            var cm_AvidLoadTimer = setTimeout("cm_AvidLoadTimedOut=true", 2000);
        }
    }
    if (chost) cm_HOST = chost;
    if (cci) cm_ClientID = cci;
}
var cI = cI;
var cE = cE;

function cmStartTagSet() {
    if (cG8) return;
    cG8 = new Array();
    cG8[0] = new _cm();
    cG8Index = 1;
}

function cmAddShared(nm, val) {
    if (cG8) cG8[0][nm] = val;
}

function cmSendTagSet() {
    var request;
    var cG8_tmp = cG8;
    while ((request = C7(arguments[0])) != null) {
        c9(request, cG8_tmp[0].ci);
    }
    cG8 = null;
}

function _CQ(pl, host, qs) {
    this.pl = pl;
    this.hosts = host.split(",");
    if (qs) this.qs = qs;
    this.cM5 = CR;
}

function CR() {
    var a = arguments;
    var h = a[0] ? a[0] : this.hosts[0];
    return this.pl + "//" + h + (this.qs ? this.qs : "");
}

function _cG7() {
    this.cM0 = new Object();
    this.uls = new Object();
    this.rfs = new Object();
    this.cTI = new Array();
    this.cPE = 0;
    this.normalizeURL = c2;
    this.normalizeFIELDS = c21;
    this.normalizeFORM = c22;
    this.getPageID = c1;
    this.getPluginPageID = cmGetPluginPageID;
}

function cmGetPluginPageID(cVA) {
    splitClientIDs = cm_ClientID.split(";");
    finalClientID = cVA;
    for (var n = 0; n < splitClientIDs.length; n++) {
        if (splitClientIDs[n] == cVA) {
            finalClientID = cm_ClientID;
            break;
        }
    }
    return this.getPageID(finalClientID);
}

function c1(cVA) {
    var pi = cG7.cM0[cVA];
    return pi ? pi : "";
}

function CS(cVA) {
    var ul = cG7.uls[cVA];
    if (!ul) ul = window.location.href;
    return ul ? ul : "";
}

function CT(cVA) {
    var rf = cG7.rfs[cVA];
    if (!rf) rf = cG6.referrer;
    return rf ? rf : "";
}

function CP(href) {
    var h = cGT;
    if (!h) h = cGT = cG7.normalizeURL(window.location.href, false);
    var a = href.indexOf("#");
    if (a >= 0 && a <= h.length) {
        var ha = h.indexOf("#");
        if (ha < 0) ha = h.length;
        if (href.substring(0, a) == h.substring(0, ha)) return href.substring(a);
    }
    return href;
}

function c21(fields) {
    return fields;
};

function c22(form) {
    return form;
};

function c2(url, isHref) {
    if (isHref) {
        url = CP(url);
        var pfx = window.location.protocol + "//" + window.location.host;
        if (url.indexOf(pfx) == 0) url = url.substring(pfx.length);
    }
    return cD(url);
}

function c4() {
    for (var b in cmUA)
        if (cGM.indexOf(b) != -1) return cmUA[b];
    return cmDefaultLimit;
}

function C0(n) {
    if (cG7) {
        if (cG7.cTI && cG7.cTI[n]) {
            cG7.cTI[n].cmLD = true;
        }
        cG7.cPE--;
        if (cG7.onResponse) cG7.onResponse(n);
    }
    dontExit = false;
}

function CN(n) {
    if (cG7) {
        cG7.cPE--;
        var img = null;
        if (cG7.cTI && cG7.cTI[n]) {
            img = cG7.cTI[n];
            img.cmLD = true;
        }
        if (cG7.onError && (!img || !img.cmTO)) cG7.onError(3, img);
    }
}

function c6(host, n) {
    if (cG3) cG3[host] = true;
    C0(n);
}

function CO(n) {
    if (cG7 && cG7.cTI && cG7.cTI[n] && !(cG7.cTI[n].cmLD)) {
        var img = cG7.cTI[n];
        img.cmTO = img.src;
        if (cG7.onError) cG7.onError(4, img.cmTO);
    }
}

function c8(host) {
    if (!cG3 || cG3[host]) return true;
    var dt = new Date();
    if ((dt.getTime() - cG2[host]) > cG4) return true;
    return false;
}

function CV(host, url, cVBH) {
    if (!cVBH) cVBH = cm_ClientID;
    if ((!cG2[host] || c8(host)) && (cm_OffsiteImpressionsEnabled == false || cm_Avid != null || cm_AvidLoadTimedOut)) {
        var img = new Image();
        var i = cG1;
        cG7.cTI[cG1++] = img;
        if (!cG2[host]) {
            var dt = new Date();
            cG2[host] = dt.getTime();
            img.onload = new Function("if(c6)c6('" + host + "'," + i + ");");
        } else {
            img.onload = new Function("if(C0)C0(" + i + ");");
        }
        img.onerror = new Function("if(CN)CN(" + i + ");");
        if (cm_OffsiteImpressionsEnabled && cm_Avid != null && cm_Avid != "none") {
            url += "&avid=" + cm_Avid;
        }
        var limit = c4();
        if (url.length > limit) {
            url = url.substring(0, limit - 6) + "&err=O";
        }
        if (cG7.onTagSent) cG7.onTagSent(url, i);
        img.src = url;
        img.ci = cVBH;
        setTimeout('if(CO)CO(' + i + ');', cm_TimeoutSecs * 1000);
    } else {
        setTimeout('if(CV)CV("' + host + '","' + url + '","' + cVBH + '");', cG5);
    }
}

function c9(img) {
    if (cI("CMDisabled")) return;
    var limit = c4();
    for (var h = 0; h < img.hosts.length; h++) {
        var url = img.cM5(img.hosts[h]);
        if (url.length > limit) url = url.substring(0, limit - 6) + "&err=O";
        cG7.cPE++;
        CV(img.hosts[h], url);
    }
}

function cC() {
    if (!this.ul) {
        if (this.tid == "8" || (this.tid == "9" || this.tid == "10")) {
            this.ul = window.location.protocol + "//" + window.location.hostname;
        } else {
            this.ul = window.location.href;
        }
    }
    if (cG8) cG8[cG8Index++] = this;
    else {
        var request = this.getImgSrc(arguments[0], 1);
        c9(request, this.ci);
        return request;
    }
}

function cmLogError(e) {}

function C4(src, tgt, compact) {
    if (!compact) {
        if (!src.rf) {
            if (!document.referrer) tgt.rf = "";
            else tgt.rf = document.referrer;
        } else if (src != tgt) tgt.rf = src.rf;
        if (!src.ul || src.ul == "" || src.ul == "(none)") tgt.ul = window.location.href;
        else if (src != tgt) tgt.ul = src.ul;
        var ul = cG7.normalizeURL(tgt.ul, false);
        if (ul != "") tgt.ul = ul;
    }
}

function C5(tgt, compact) {
    if (cm_FirstPartyDetect && !compact) {
        if (cI("cmRS") || cI("TestSess")) {
            tgt.ts = "Y";
        } else {
            CB("TestSess", "Y");
            tgt.ts = cI("TestSess");
        }
        tgt.tp = cI("TestPerm");
        if (tgt.tp != "Y") {
            dt.setHours(dt.getHours() + 5);
            CB("TestPerm", "Y", dt.toGMTString());
            tgt.tp = cI("TestPerm");
        }
    }
}

function C6(tag, cV3, skipJSFParams) {
    var qs = "";
    if (tag.tid) qs += "tid=" + tag.tid;
    var isPV = (tag.tid == 1 || (tag.pc && tag.pc.charAt(0) == 'Y'));
    if (!tag.lp && isPV) tag.lp = cmLastPageID;
    for (var cOb in tag) {
        if (!tag[cOb] || tag[cOb] == "" || tag[cOb].constructor == Function || cOb == "qs" || cOb == "tid") continue;
        if (cV3 && cV3[cOb] == tag[cOb]) continue;
        if (qs != "") qs += "&";
        qs += cD(cOb) + "=" + cE(cD(tag[cOb]));
    }
    if (!tag.rs && tag.ci) {
        if (tag.pi && isPV) {
            cG7.cM0[tag.ci] = tag.pi;
            if (window.digitalData && !window.digitalData.page.pageInfo[0].pageID) {
                window.digitalData.page.pageInfo[0].pageID = tag.pi;
            }
        }
        if (tag.ul) cG7.uls[tag.ci] = tag.ul;
        if (tag.rf) cG7.rfs[tag.ci] = tag.rf;
    }
    if (cV3 && cm_SecureTags.indexOf("|" + tag.tid + "|") != -1) cV3.protocol = "cd-savings-accounts.html";
    return qs;
}

function C8(cV3) {
    var cm_pl = location.protocol;
    if (cV3 && cV3.protocol) cm_pl = cV3.protocol;
    if (cm_pl != "http:" && cm_pl != "cd-savings-accounts.html") cm_pl = "cd-savings-accounts.html";
    return cm_pl;
}

function c0() {
    var a = arguments;
    C4(this, this, a[0]);
    C5(this, a[0]);
    var cV3 = new Object();
    var qs = C6(this, cV3);
    var req = new _CQ(C8(cV3), cm_HOST, qs);
    return a[1] ? req : req.cM5();
}

function C7() {
    var cV3, first, p, a, pl, lim, len, l, i, tq;
    if (!cG8 || cG8.length < 2) return null;
    cV3 = cG8[0];
    first = cG8[1];
    cV3.ci = first.ci;
    for (i = 2; i < cG8.length; i++) {
        if (cV3.ci.indexOf(cG8[i].ci) == -1) {
            cV3.ci += ";" + cG8[i].ci;
        }
    }
    for (i = 0; i < cG0.length; i++) {
        p = cG0[i];
        if (!cV3[p]) cV3[p] = first[p];
    }
    a = arguments;
    C4(first, cV3, a[0]);
    C5(cV3, a[0]);
    pl = C8(cV3);
    img = new _CQ(pl, cm_HOST);
    img.qs = C6(cV3);
    lim = c4();
    len = 0;
    for (var h = 0; h < img.hosts.length; h++) {
        l = pl.length + img.hosts[h].length + img.qs.length;
        if (l > len) len = l;
    }
    for (i = 1; i < cG8.length; i++) {
        tq = C6(cG8[i], cV3, true);
        if (i > 1 && len + tq.length + 1 > lim) {
            for (j = 1; j < cG8.length - i + 1; j++) cG8[j] = cG8[j + i - 1];
            cG8.length = cG8.length - i + 1;
            break;
        }
        len += tq.length + 1;
        img.qs += "&" + tq;
    }
    if (i == cG8.length) cG8 = null;
    return img;
}

function _cm() {
    var i, a = arguments;
    this.ci = cm_ClientID;
    for (i = 0; i < a.length; i++) this[a[i]] = a[++i];
    this.write = cC;
    this.getImgSrc = c0;
    this.writeImg = cC;
    this.st = cm_ClientTS;
    this.vn1 = "4.2.7.1BOA";
    if (cF(5.5) || !cF(0)) {
        var ec = (cm_UseUTF8 && encodeURIComponent) || cGU ? "utf-8" : cG6.charset;
        if (!ec) ec = cG6.defaultCharset;
        if (!ec) ec = cG6.characterSet;
        this.ec = ec;
    }
}

function cD(s) {
    var z = "";
    s = z + (!s ? "" : s);
    return s.split("'").join(z).split("\"").join(z).split("\r").join(z).split("\n").join(z);
}

function cE(s) {
    var i = 0,
        j;
    while (s.charAt(i) == " " && i != s.length) i++;
    j = s.length - 1;
    while (s.charAt(j) == " " && j != 0) j--;
    s = s.substring(i, j + 1);
    if (cm_UseUTF8 && encodeURIComponent) s = encodeURIComponent(s);
    else {
        s = preEscape(s);
        s = escape(s);
        var regularExpression = new RegExp("%25u00", "g");
        s = s.replace(regularExpression, "%u00");
    }
    s = s.split("+").join("%2B");
    return s;
}

function preEscape(str) {
    for (var i = 160; i < 256; i++) {
        var regularExpression = new RegExp(String.fromCharCode(i), "g");
        str = str.replace(regularExpression, "%u00" + i.toString(16));
    }
    return str;
}

function cF(ver) {
    var i = cGM.indexOf("MSIE");
    if (i != -1) return (parseFloat(cGM.substring(i + 5)) >= ver);
    return false;
}

function CD(ver) {
    return (cGN.indexOf("Gecko") != -1 && parseInt(cGM) >= ver);
}

function cI(nm, skey, cV5) {
    var dc = cG6.cookie;
    var cV4 = cJ(nm, dc, ";");
    if (!skey || !cV4) {
        if (!cV4 && cV5 != null) {
            return cV5;
        }
        return cV4;
    }
    cV4 = cJ(skey, cV4, "&");
    if (!cV4 && cV5 != null) {
        return cV5;
    }
    return unescape(cV4);
}

function CL() {
    var cookies, dc, nv, i, c = 0;
    dc = cG6.cookie;
    if (dc) {
        cookies = dc.split(";");
        c = cookies.length;
        for (i = 0; i < cookies.length; i++) {
            nv = cookies[i].split("=");
            if (nv.length < 2 || nv[1] == null || nv[1] == "") {
                c--;
            }
        }
    }
    return c;
}

function CB(nm, val, expires, domain) {
    var err, len, v, dc = cG6.cookie;
    err = null;
    len = val.length + 1;
    if (!cI(nm)) {
        len += nm.length;
    }
    if (len > 4096) err = 1;
    else if (dc) {
        if (CL() >= 50) err = 2;
        else if (dc.length + len + 2 > 4096) err = 1;
    }
    if (err) {
        if (cG7.onError) cG7.onError(err, name);
        return false;
    }
    v = nm + "=" + val + ";path=/";
    if (domain) v += ";domain=" + domain;
    if (expires) v += ";expires=" + expires;
    cG6.cookie = v;
    return true;
}

function cmSetSubCookie(nm, skey, value, expires, domain) {
    var currentCookieVal = cI(nm);
    var newCookieVal;
    if (!currentCookieVal) {
        newCookieVal = skey + "=" + value;
    } else {
        var sep = '&';
        var pfx = skey + "=";
        var begin = currentCookieVal.indexOf(pfx);
        if (begin >= 0) {
            if (begin > 0 && currentCookieVal.charAt(begin - 1) != sep) {
                begin = currentCookieVal.indexOf(sep + pfx);
                if (begin >= 0) {
                    begin++;
                }
            }
        }
        if (begin >= 0) {
            var valueOffset = begin + skey.length + 1;
            var end = currentCookieVal.indexOf(sep, valueOffset);
            if (end < 0) {
                end = currentCookieVal.length;
            }
            newCookieVal = currentCookieVal.substring(0, valueOffset) + value + currentCookieVal.substring(end);
        } else {
            newCookieVal = currentCookieVal + sep + skey + "=" + value;
        }
    }
    CB(nm, newCookieVal, expires, domain);
}

function CC(nm, domain) {
    var v = cI(nm);
    if (v != null) {
        var dt = new Date();
        dt.setYear(1973);
        var v = nm + "=;path=/;expires=" + dt.toGMTString();
        if (domain) v += ";domain=" + domain;
        cG6.cookie = v;
    }
    return v;
}

function cJ(nm, src, sep) {
    var pfx, s, begin, end, obj = null;
    pfx = nm + "=";
    s = sep + ' ';
    begin = src.indexOf(s + pfx);
    if (begin == -1) {
        s = sep;
        begin = src.indexOf(s + pfx);
    }
    if (begin == -1) {
        begin = src.indexOf(pfx);
        if (begin != 0) {
            return null;
        }
    } else {
        begin += s.length;
    }
    end = src.indexOf(s, begin);
    if (end == -1) {
        end = src.length;
    }
    return src.substring(begin + pfx.length, end);
}

function cK(elt, type, handle, fName, f) {
    if (handle) {
        var event = handle.toString();
        if (event.indexOf(fName) == -1) {
            if (cGU && event.indexOf("function" + "(") == 0) {
                if (type == "onload") {
                    fName = event.substring(event.indexOf("{"), event.length) + ";" + fName + ";";
                } else {
                    fName = fName + ";" + event.substring(event.indexOf("{"), event.length);
                }
            } else {
                elt["_c_" + type] = handle;
                if (type == "onload") {
                    fName = "if(!e)var e=null;var ret=this._c_" + type + "(" + (cF(5) ? "" : "e") + ");" + fName + ";return ret;"
                } else {
                    fName = "if(!e)var e=null;" + fName + ";return this._c_" + type + "(" + (cF(5) ? "" : "e") + ");"
                }
            }
            var newfunc = new Function("e", fName);
            return newfunc;
        } else {
            return handle;
        }
    } else {
        return f;
    }
}

function CG(e) {
    var e;
    if (cF(4)) {
        if (window.event) {
            e = window.event.srcElement;
        } else {
            e = e.target;
        }
    } else if (e) {
        if (CD(5)) {
            e = e.currentTarget;
        } else {
            e = e.target;
        }
    }
    return e;
}

function CU(cm, cVBH, pi, dest, ref) {
    var ul, rf;
    cm.pi = pi ? pi : c1(cVBH);
    if (cGQ) {
        if (dest || ref) {
            cm.ul = dest ? dest : "";
            cm.rf = ref ? ref : "";
        } else {
            ul = CS(cVBH);
            rf = CT(cVBH);
            if (cm.pi == "" || ul.indexOf("cm_") > 0 || (rf != "" && rf.indexOf(window.location.protocol + "//" + window.location.host) != 0)) {
                cm.ul = ul;
                cm.rf = rf;
            }
        }
    }
}

function cL(t1, t3, fname, cVB, url, field, resent, pi, dest, ref) {
    var cm = new _cm("tid", "10");
    CU(cm, cm.ci, pi, dest, ref);
    cm.st = t1;
    cm.ti = t3;
    cm.fo = fname;
    cm.ac = cVB;
    cm.hr = url;
    cm.fi = cG7.normalizeFIELDS(field);
    cm.fi = cm.fi.replace(/undefined/g, "99");
    if (resent) cm.rs = "Y";
    cm.write(1);
}

function cM(t1, ti, name, href, resent, pi, dest, ref) {
    var cm = new _cm("tid", "8");
    CU(cm, cm.ci, pi, dest, ref);
    cm.st = t1;
    cm.ti = ti;
    cm.nm = name;
    cm.hr = href;
    var cm_crIndex = href.indexOf("cm_cr=");
    var cm_meIndex = href.indexOf("cm_me=");
    if (cm_crIndex > -1) {
        var tempIndex = href.indexOf("&", cm_crIndex);
        if (tempIndex == -1) {
            cm.cm_cr = href.substring(cm_crIndex + 6);
        } else {
            cm.cm_cr = href.substring(cm_crIndex + 6, tempIndex);
        }
    }
    if (cm_meIndex > -1) {
        var tempIndex = href.indexOf("&", cm_meIndex);
        if (tempIndex == -1) {
            cm.cm_me = href.substring(cm_meIndex + 6);
        } else {
            cm.cm_me = href.substring(cm_meIndex + 6, tempIndex);
        }
    }
    if (resent) cm.rs = "Y";
    cm.write(1);
}

function cN(t1, t2, cx, t4, resent, pi) {
    var cm = new _cm("tid", "11");
    cm.pi = pi ? pi : c1(cm.ci);
    cm.st = t1;
    cm.lc = t2;
    cm.lx = t4;
    cm.cx = cx;
    if (resent) cm.rs = "Y";
    cm.write(1);
}

function CM(href) {
    var n, len, a, q;
    if ((n = href.indexOf("?")) == -1) n = href.lastIndexOf("../index.html");
    if (n != -1) {
        len = href.indexOf("#", n);
        if (len == -1) len = href.length;
        while (n != -1 && n < len) {
            n = href.indexOf("cm_", n);
            if (n != -1) {
                a = href.indexOf("&", n);
                if (a == -1) a = len;
                q = href.indexOf("=", n);
                if (q != -1 && q < a) this[href.substring(n, q)] = href.substring(q + 1, a);
                n = a;
            }
        }
    }
}

function CK(href, trackSP, trackRE, trackCR, trackME) {
    var cm, link, sp, re, cr, me;
    if ((trackSP || trackRE) && href) {
        cm = new _cm("tid", "9");
        link = new CM(CP(href));
        if (trackSP) {
            sp = cm.cm_sp_o = link.cm_sp_o;
            if (!sp) sp = cm.cm_sp = link.cm_sp;
        }
        if (trackRE) {
            re = cm.cm_re_o = link.cm_re_o;
            if (!re) re = cm.cm_re = link.cm_re;
        }
        if (trackCR) {
            if (href.indexOf("#") == -1) {
                cr = cm.cm_cr = link.cm_cr;
            }
        }
        if (trackME) {
            me = cm.cm_me = link.cm_me;
        }
        if (sp || re || cr || me) {
            cm.pi = c1(cm.ci);
            cm.st = cm_ClientTS;
            cm.write(1);
        }
    }
}

function CH(t1, ti, msg, resent, pi) {
    if (msg != cGL) {
        var cm = new _cm("tid", "12");
        cm.pi = pi ? pi : c1(cm.ci);
        cm.st = t1;
        cm.ti = ti;
        if (resent) cm.rs = "Y";
        cm.er = msg;
        cm.write(1);
        cGL = cm_FormError;
    }
}

function cmFormBlurRecord(e) {
    if (e.cmFormEleMemValue != cmFormElementValue(e) && e.cmFormEleMemValue != null) {
        cmFormReportInteraction(e);
    }
    e.form.cmEleValue = -1;
}

function cmFormElementOnclickEvent() {
    var q;
    try {
        var cFE = cmFormElementValue(this);
        if ((cmFormC1.indexOf(this.type) >= 0) || (this.cmFormEleMemValue != cFE)) {
            if (this.type == "radio") {
                for (q = 0; q < this.form.elements.length; q++) {
                    if (this.form.elements[q].cM2 == this.cM2) {
                        this.form.elements[q].cmFormEleMemValue = null;
                    }
                }
            }
            this.cmFormEleMemValue = cFE;
            cmFormReportInteraction(this);
        }
    } catch (e) {
        cmLogError(e);
    }
    try {
        if (this.cX) {
            return this.cX();
        }
    } catch (e) {
        cmLogError(e);
    }
}

function cmFormElementOnfocusEvent() {
    try {
        this.form.cmEleValue = this.cM2;
        this.cmFormEleMemValue = cmFormElementValue(this);
    } catch (e) {
        cmLogError(e);
    }
    try {
        if (this.cmOnFocus) {
            return this.cmOnFocus();
        }
    } catch (e) {
        cmLogError(e);
    }
}

function cmFormElementOnblurEvent() {
    try {
        cmFormBlurRecord(this);
    } catch (e) {
        cmLogError(e);
    }
    try {
        if (this.cmOnBlur) {
            return this.cmOnBlur();
        }
    } catch (e) {
        cmLogError(e);
    }
}

function cmFormElementOnchangeEvent() {
    try {
        cmFormReportInteraction(this);
    } catch (e) {
        cmLogError(e);
    }
    try {
        if (this.cmOnChange) {
            return this.cmOnChange();
        }
    } catch (e) {
        cmLogError(e);
    }
}

function cmFormElementValue(e) {
    var x;
    if (e.type == "checkbox") return e.checked;
    else if ((cmFormC3.indexOf(e.type) >= 0) && e.options) {
        var sel_val = "";
        for (x = 0; x < e.options.length; x++) {
            if (e.options[x].selected == true) sel_val = sel_val + e.options[x].index;
        }
        return sel_val;
    } else if (cmFormC2.indexOf(e.type) >= 0 || e.type == "file" || e.type == "radio") {
        return e.value;
    } else {
        return null;
    }
}

function cO(cVC, cVB) {
    var dt, url = "",
        x, cFa;
    cVB = cVC + ":" + cVB;
    if (cVC != -1) {
        if (cG6.forms[cVC]) {
            var cF = cG6.forms[cVC],
                cFa = cF.attributes;
            url = cF.action ? cF.action : cFa.action.nodeValue ? cFa.action.nodeValue : cFa.getNamedItem('action').value ? cFa.getNamedItem('action').value : "";
        }
    }
    cGD = cG6.cmTagCtl.normalizeFORM(cGD);
    var pgID = c1(cm_ClientID);
    if (cm_FormPageID && pgID != "") {
        var frmAr = cGD.split(";");
        cGD = "";
        for (x = 0; x < frmAr.length - 1; x++) {
            cGD += pgID.split(":").join("").split(";").join("") + "_" + frmAr[x] + ";";
        }
        cm_FormPageID = false;
    }
    if (cV(url) && (cVC != "-1" || (cVC == "-1" && cmSubmitFlag == false))) {
        dt = new Date();
        cGH = dt.getTime();
        cGF = cVB;
        cGE = cG7.normalizeURL(url, true);
        cL(cm_ClientTS, cGH, cGD, cGF, cGE, cGC, false);
        cGG = cGC;
        cGC = "";
    } else {
        cGF = "";
    }
}

function cmFormOnresetEvent() {
    var x;
    try {
        cO(this.cM1, "R");
    } catch (e) {
        cmLogError(e);
    }
    try {
        for (x = 0; x < cG6.forms[this.cM1].elements.length; x++) {
            cG6.forms[this.cM1].elements[x].cmFormEleMemValue = false;
        }
    } catch (e) {
        cmLogError(e);
    }
    try {
        if (this.cQ) {
            return this.cQ();
        }
    } catch (e) {
        cmLogError(e);
    }
}

function cmFormOnsubmitEvent() {
    try {
        if (this.cmEleValue > -1) {
            cmFormBlurRecord(this.elements[this.cmEleValue]);
        }
    } catch (e) {
        cmLogError(e);
    }
    try {
        if (this.cM1 >= 0 && this.cmSubmitIndex == false) {
            cmSubmitFlag = true;
            this.cmSubmitIndex = true;
            cO(this ? this.cM1 : -1, "S");
            CE();
        }
    } catch (e) {
        cmLogError(e);
    }
    try {
        if (this.cP) {
            return this.cP();
        }
    } catch (e) {
        cmLogError(e);
    }
}

function cmFormReportInteraction(e) {
    var cmElementName = cG6.cmTagCtl.normalizeFIELDS(e.name ? e.name : e.id ? e.id : "");
    var cmTempFieldSeq = cGC + e.form.cM1 + ":" + e.cM2 + ":" + cmElementName.split(":").join("|").split(";").join("|") + ";";
    if (cmTempFieldSeq.length < 1000) {
        cGC = cmTempFieldSeq;
    }
}

function cmFormSubmit() {
    try {
        if (this.cmEleValue > -1) {
            cmFormBlurRecord(this.elements[this.cmEleValue]);
        }
    } catch (e) {
        cmLogError(e);
    }
    try {
        if (this.cM1 >= 0 && this.cmSubmitIndex == false) {
            cmSubmitFlag = true;
            this.cmSubmitIndex = true;
            cO(this ? this.cM1 : -1, "S");
            CE();
        }
    } catch (e) {
        cmLogError(e);
    }
    try {
        this.cmSubmit();
    } catch (e) {
        cmLogError(e);
    }
}
cG6.cmTagCtl.normalizeFORM = function(form) {
    return form;
};
cG6.cmTagCtl.normalizeFIELDS = function(field) {
    return field;
};

function cU() {
    if (cm_SkipHandlerReg.indexOf("F") == -1) {
        var i, form, cV9, j, e, rdname, ei;
        for (i = 0; i < cG6.forms.length; i++) {
            form = cG6.forms[i];
            ei = 0;
            if (!form.cM1 && !form.cmEleValue && !form.cmSubmitIndex) {
                form.cM1 = i;
                form.cmEleValue = -1;
                form.cmSubmitIndex = false;
                form.radiogroup = {
                    "key": "value"
                };
                try {
                    if (cF(5) && !cF(8)) {
                        var cm_FA = form.attributes;
                        cV9 = cm_FA.name ? cm_FA.name.nodeValue : cm_FA.id ? cm_FA.id.nodeValue : "UNDEFINED";
                    } else if (form.attributes.getNamedItem) {
                        cV9 = form.attributes.getNamedItem('name').value;
                    } else {
                        cV9 = form.name;
                    }
                } catch (e) {
                    cV9 = "UNDEFINED";
                    cmLogError(e);
                }
                cGD += cV9 + ":" + i + ";";
                try {
                    form.cmSubmit = form.submit;
                    form.submit = cmFormSubmit;
                } catch (e) {
                    cmLogError(e);
                }
                try {
                    if (form.onsubmit && typeof(form.onsubmit) == "function") {
                        form.cP = form.onsubmit;
                    }
                    form.onsubmit = cmFormOnsubmitEvent
                } catch (e) {
                    cmLogError(e);
                }
                try {
                    if (form.onreset && typeof(form.onreset) == "function") {
                        form.cQ = form.onreset;
                    }
                    form.onreset = cmFormOnresetEvent;
                } catch (e) {
                    cmLogError(e);
                }
                for (j = 0; j < form.elements.length; j++) {
                    e = form.elements[j];
                    if (!e.cM1 && !e.cM2 && !e.cmFormEleMemValue) {
                        e.cM1 = i;
                        e.cM2 = ei;
                        e.cmFormEleMemValue = null;
                        ei++;
                        if (e.type == "radio") {
                            rdname = e.name ? e.name : e.id ? e.id : "";
                            if (rdname != "") {
                                if (form.radiogroup[rdname]) {
                                    e.cM2 = form.radiogroup[rdname];
                                } else {
                                    form.radiogroup[rdname] = e.cM2;
                                }
                            }
                        }
                        if (cmFormC1.indexOf(e.type) >= 0 || e.type == "checkbox" || e.type == "radio") {
                            try {
                                if (e.onclick && typeof(e.onclick) == "function") {
                                    e.cX = e.onclick;
                                }
                                e.onclick = cmFormElementOnclickEvent;
                            } catch (e) {
                                cmLogError(e);
                            }
                        }
                        if (cmFormC2.indexOf(e.type) >= 0 || cmFormC3.indexOf(e.type) >= 0) {
                            try {
                                if (e.onfocus && typeof(e.onfocus) == "function") {
                                    e.cmOnFocus = e.onfocus;
                                }
                                e.onfocus = cmFormElementOnfocusEvent;
                                if (e.onblur && typeof(e.onblur) == "function") {
                                    e.cmOnBlur = e.onblur;
                                }
                                e.onblur = cmFormElementOnblurEvent;
                            } catch (e) {
                                cmLogError(e);
                            }
                        }
                        if (e.type == "file") {
                            try {
                                if (e.onchange && typeof(e.onchange) == "function") {
                                    e.cmOnChange = e.onchange;
                                }
                                e.onchange = cmFormElementOnchangeEvent;
                            } catch (e) {
                                cmLogError(e);
                            }
                        }
                    }
                }
            }
        }
    }
}

function cV(path) {
    if (cm_TrackLink == true || cm_TrackLink == "A") return true;
    else {
        if (cm_TrackLink == "E" && path.indexOf("../index.html") != 0) return true;
        var de;
        if ((de = cm_DownloadExtensions) != null) {
            var p = path.lastIndexOf(".");
            if (p != -1) {
                var ext = path.substring(p);
                for (var e = 0; e < de.length; e++) {
                    if (ext == de[e]) return true;
                }
            }
        }
        return false;
    }
}

function cW(e) {
    CI();
    var e = CG(e);
    if (e) C9(e);
    CA(1);
    CJ(1);
    CE();
}

function C9(e) {
    cGI = "";
    cGJ = "";
    cGK = "";
    var type = e.tagName.toUpperCase();
    if (type == "AREA") {
        cGJ = e.href ? e.href : e.id ? e.id : "";
        var p = e.parentElement ? e.parentElement : e.parentNode;
        if (p != null) cGI = p.name ? p.name : p.id ? p.id : "";
    } else {
        while (type != "A" && type != "HTML") {
            if (!e.parentElement) e = e.parentNode;
            else e = e.parentElement;
            if (e) type = e.tagName.toUpperCase();
        }
        if (type == "A") {
            cGJ = e.href ? e.href : "";
            cGI = e.getAttribute("data-bactmln") ? e.getAttribute("data-bactmln") : e.name ? e.name : e.id ? e.id : "";
        }
    }
    var man_cm_re = e.getAttribute("manual_cm_re");
    if (man_cm_re) {
        cGJ = cGJ + ((cGJ.indexOf("?") > -1) ? "&" : "?") + "cm_re=" + man_cm_re;
    }
    var man_cm_sp = e.getAttribute("manual_cm_sp");
    if (man_cm_sp) {
        cGJ = cGJ + ((cGJ.indexOf("?") > -1) ? "&" : "?") + "cm_sp=" + man_cm_sp;
    }
    cGJ = cG7.normalizeURL(cGJ, true);
    if (cV(cGJ) == true) {
        var dt = new Date();
        cGK = dt.getTime();
        cM(cm_ClientTS, cGK, cGI, cGJ, false);
    } else {
        cGJ = "";
    }
}

function cX(phase) {
    window.bactm_cXExecuting = true;
    window.bactm_impressionsSent = window.bactm_impressionsSent || {};
    
    CI();
    var i, lnk, imp, trackSP, trackRE, trackCR, trackME;
    imp = cm_TrackImpressions;
    trackSP = (imp.indexOf("S") != -1);
    trackRE = (imp.indexOf("R") != -1);
    trackCR = (imp.indexOf("C") != -1);
    trackME = (imp.indexOf("C") != -1);
    for (i = 0; i < cG6.links.length; i++) {
        lnk = cG6.links[i];
        if (cm_SkipHandlerReg.indexOf("L") == -1) {
            if (!CD(5)) {
                lnk.onclick = cK(lnk, "onclick", lnk.onclick, "cW(e)", cW);
            } else if (!lnk.cM4) {
                lnk.addEventListener("click", cW, false);
                lnk.cM4 = 1;
            }
        }
        if (phase == "onload") {
            var tempLinkHref = lnk.href
              , sp;
            if (lnk.getAttribute("manual_cm_re")) {
                if (lnk.href.indexOf("?") > -1) {
                    tempLinkHref = tempLinkHref + "&cm_re=" + lnk.getAttribute("manual_cm_re");
                } else {
                    tempLinkHref = tempLinkHref + "?cm_re=" + lnk.getAttribute("manual_cm_re");
                }
            }
            if (lnk.getAttribute("manual_cm_sp")) {
                if (lnk.href.indexOf("?") > -1) {
                    tempLinkHref = tempLinkHref + "&cm_sp=" + lnk.getAttribute("manual_cm_sp");
                } else {
                    tempLinkHref = tempLinkHref + "?cm_sp=" + lnk.getAttribute("manual_cm_sp");
                }
            }
            if(typeof bactm !== 'undefined') {
                var qs = new bactm.QueryString(tempLinkHref);
                sp = qs.get('cm_sp');
            }
            if ((!sp && !lnk.cmImpressionSent) || (sp && !window.bactm_impressionsSent[sp])) {
                CK(tempLinkHref, trackSP, trackRE, trackCR, trackME);
                lnk.cmImpressionSent = 1;
                if(sp) window.bactm_impressionsSent[sp] = true;
            }
        }
    }
    CJ(1);
    window.bactm_cXExecuting = false;
}

function cY(e) {
    var dt = new Date();
    cmT2 = dt.getTime();
    CH(cm_ClientTS, cmT2, cm_FormError, false);
    if (!cGS && (cF(4) || CD(5))) {
        window.cX("onload");
        cU();
    }
    cGB = null;
}

function cZ(e) {
    cG3 = null;
    CI();
    var delay = false;
    if (cGC != "") {
        cO(-1, "U");
        delay = true;
    }
    CA(0);
    CH(cm_ClientTS, cmT3, cm_FormError, false);
    CJ(1);
    if (delay) {
        dontExit = true;
        var d1 = new Date();
        var d2 = new Date();
        for (; dontExit && (d2 - d1 < 1000);) {
            d2 = new Date();
        }
    }
    CE();
    if (cm_UseCookie && cG7.cPE == 0) {
        var pi = escape(c1(cm_ClientID));
        CB("cmRS", "t3=" + cmT3 + "&pi=" + pi);
    }
    if (cG7.onUnload) cG7.onUnload();
    if (cF(5) && !cF(5.5) && window.parent != window) cG7.cTI = null;
    else {
        if (!cGU) {
            for (var i = 0; i < cG7.cTI.length; i++) {
                cG7.cTI[i].onload = null;
                cG7.cTI[i].onerror = null;
            }
        }
    }
}

function CA(force) {
    var dt = new Date();
    var cx = dt.getTime();
    if (cm_TrackTime && (cmT3 == -1 || force == 1 || (cx - cmT3) > 10000)) {
        cN(cm_ClientTS, cmT2, cx, cGA, false);
    }
    cmT3 = cx;
}

function CE() {
    if (cm_UseCookie) {
        var cVF, cVG, pg, cVD, cVE = "";
        cVF = cGA ? "&t4=" + cGA : "";
        cVG = (cGJ != "") ? "&lti=" + cGK + "&ln=" + escape(cGI) + "&hr=" + escape(cGJ) : "";
        pg = new Object();
        CU(pg, cm_ClientID);
        var jsfpdata = "";
        cVD = "&t1=" + cm_ClientTS + "&t2=" + cmT2 + "&t3=" + cmT3 + cVF + cVG + "&fti=" + cGH + "&fn=" + escape(cGD) + "&ac=" + cGF + "&fd=" + escape(cGG) + "&uer=" + escape(cm_FormError) + "&fu=" + escape(cGE) + "&pi=" + escape(pg.pi) + "&ho=" + escape(cm_HOST) + "&ci=" + escape(cm_ClientID);
        if (pg.ul && pg.rf && pg.ul.length + pg.rf.length < cGO) cVE = "&ul=" + escape(pg.ul) + "&rf=" + escape(pg.rf);
        if (!CB("cmRS", cVD + cVE + jsfpdata))
            if (!CB("cmRS", cVD + jsfpdata)) CB("cmRS", "t3=" + cmT3 + "&pi=" + escape(pg.pi) + jsfpdata);
    }
}

function cmSetAvid(id) {
    clearTimeout(cm_AvidLoadTimer);
    if (id) {
        cm_Avid = id;
    } else {
        cm_Avid = "none";
    }
    CB("CMAVID", cm_Avid);
    cm_AvidLoadTimedOut = false;
}

function cmJSFConvertSAtoCM(value) {
    var len = value.length;
    var lenSA = 22;
    var lenCM = 23;
    if (len < 19) return null;
    if (value.charAt(0) != "U" && value.charAt(0) != "u") return null;
    if (len < lenSA) {
        value = value + value.substring(len - (lenSA - len), len);
    }
    var result = "99";
    result = result + value.substring(1, lenCM - 1);
    return result;
}

function debugReadCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
_cm.prototype.addTP = function() {
    var tp = new cmTP(new cmApp());
    for (var o in tp) {
        if (tp[o] == null || tp[o] == "" || tp[o].toString().indexOf("function ") == 0) continue;
        this[o] = cE(cD(tp[o]));
    }
    return this;
};

function cmApp() {
    var n = navigator,
        b = n.appName,
        c = this;
    if (b == "Netscape") {
        c.b = "ns"
    } else if (b == "Microsoft Internet Explorer") {
        c.b = "ie"
    } else {
        c.b = b
    }
    c.v = parseInt(n.appVersion);
}

function cmTP(c) {
    var n = navigator,
        w = window.screen;
    this.jv = cmJv;
    if (c.b == "ns" && c.v >= 3)
        for (var i = 0; i < n.plugins.length; i++) eval('this.np' + i + '=n.plugins[' + i + '].name');
    if (c.v > 3) {
        if (c.v >= 4 && (c.b == "ns" || c.b == "ie")) {
            this.je = (n.javaEnabled() == true) ? "y" : "n";
        }
        if (c.b == "ie") {
            this.ce = n.cookieEnabled;
            this.cp = n.cpuClass;
        }
        this.sw = w.width;
        this.sh = w.height;
        this.pd = w.colorDepth;
        if (this.pd == 0) {
            this.pd = w.pixelDepth;
        }
        var fs = w.fontSmoothingEnabled;
        if (fs) {
            this.fs = fs ? "y" : "n";
        }
    }
    var tz = new Date();
    if (tz.getTimezoneOffset() == 0) {
        this.tz = "0";
    } else {
        this.tz = tz.getTimezoneOffset() / 60;
    }
}