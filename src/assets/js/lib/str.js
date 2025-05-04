import hljs from 'highlight.js/lib/core';
import {marked} from 'marked'
import detectLang from 'lang-detector'
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php'
import vbscriptHtml from 'highlight.js/lib/languages/vbscript-html'
import css from 'highlight.js/lib/languages/css'
import python from 'highlight.js/lib/languages/python'
import c from 'highlight.js/lib/languages/c'
import ruby from 'highlight.js/lib/languages/ruby'
import rust from 'highlight.js/lib/languages/rust'
import bash from 'highlight.js/lib/languages/bash'

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('html', vbscriptHtml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('pyhton', python);
hljs.registerLanguage('c', c);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('bash', bash);

export const str = (() => {

    const methods = {
        isId,
        isUUID,
        isJson,
        isHTML,
        convertDate,
        isValidDate,
        isBetweenDates,
        getRandom,
        getUUID,
        toTitleCase,
        toCamelCase,
        toSnakeCase,
        toKebabCase,
        toPascalCase,
        toCapitalCase,
        hash,
        formatBytes,
        stripHTML,
        syntaxDetect,
        syntaxHighlight,
        md
    }
    Object.keys(methods).forEach( method => {
        String.prototype[method] = function() {
           return methods[method](this)
        }
    })
    /**
     * Check if string is valid id
     * @param {string} str
     * @returns {boolean}
     */
    function isId (str) {
        return /^[A-Za-z_]([A-Za-z0-9_])*$/gi.test(str)
    }
    /**
     * Check if string is valid uuid
     * @param {string} str
     * @returns {boolean}
     */
    function isUUID (str) {
        return /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(str)
    }
    /**
     * Converts date into
     * @param {string} date
     * @returns {string}
     */
    function convertDate (date) {
        if(!window.moment) return console.warn('str.convertDate : moment is not installed')
        const dateObj = new Object({
            date: null,
            time: null
        })
        if (date && date.includes('T')) {
            date = new Date(date)
            if(!window.moment) return console.warn('str.convertDate : moment not found')
            dateObj.date = moment(date).format('DD-MM-YYYY')
            dateObj.time = moment(date).format('HH:mm')
        } else {
            console.warn('Invalid date : ' + date );
        }
        return dateObj;
    }
    /**
     *
     * @param {string} date
     * @returns {boolean}
     */
    function isValidDate (date) {
        if(!window.moment) return console.warn('str.isValidDate : moment is not available')
        return moment(date, moment.ISO_8601, true).isValid();
    }
    /**
     *
     * @param {*} date
     * @param {*} from
     * @param {*} to
     * @returns
     */
    function isBetweenDates (date,from,to) {
        const date_from_arr = from.split('/'),
            date_to_arr = to.split('/'),
            date_arr = date.split('/'),
            date_from = new Date(date_from_arr[2], parseInt(date_from_arr[1])-1, date_from_arr[0]),
            date_to = new Date(date_to_arr[2], parseInt(date_to_arr[1])-1, date_to_arr[0]),
            date_ = new Date(date_arr[2], parseInt(date_arr[1])-1, date_arr[0]);
        return date_ >= date_from && date_ < date_to;
    }
    /**
     * Determine if given string is JSON
     * @param {string} str
     * @returns {boolean}
     */
    function isJson (str) {
        try {
            JSON.parse(str)
        } catch (e) {
            return false
        }
        return true
    }
    /**
     * Determine if given string is HTML
     * @param {string} str
     * @returns {boolean}
     */
    function isHTML (str) {
        return /<\/?[a-z][\s\S]*>/i.test(str)
    }

    /**
     * Get random string of characters from given length
     * @param {number} length
     * @returns {string}
     */
    function getRandom (length) {
        let result = '';
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for ( let i = 0; i < length; i++ ) {
            result += charset.charAt(Math.floor(Math.random() * charset.length))
        }
        return result
    }
    /**
     *
     * @returns {string}
     */
    function getUUID () {
        let d = new Date().getTime()
        if (typeof performance !== 'undefined' && typeof performance.now === 'function')
            d += performance.now() //use high-precision timer if available
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0
            d = Math.floor(d / 16)
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
        })
    }
    /**
     * Transform text to title case
     * @param {string} str
     * @returns {string}
     */
    function toTitleCase (str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            }
        );
    }
    /**
     * Transform text to camel case
     * @param {string} str
     * @returns {string}
     */
    function toCamelCase (str) {
        return str.replace(/([-_][a-z])/ig, $1 => {
            return $1.toUpperCase()
                .replace('-', '')
                .replace('_', '')
        })
    }
    /**
     * Transform text to snake case
     * @param {string} str
     * @returns {string}
     */
    function toSnakeCase (str) {
        return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
    }
    /**
     * Transform text to kebab case
     * @param {string} str
     * @returns {string}
     */
    function toKebabCase (str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    }
    /**
     * Transform text to pascal case
     * @param {string} str
     * @returns {string}
     */
    function toPascalCase (str) {
        return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+/g, '')
    }
    /**
     * Transform text to capital case
     * @param {string} str
     * @returns {string}
     */
    function toCapitalCase (str) {
        return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+/g, '').toUpperCase()
    }
    /**
     * Hash string
     * @param {*} str
     * @returns
     */
    function hash (str) {
        let hash = 0,
            i, chr
        if (str.length === 0)
            return hash
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i)
            hash = ((hash << 5) - hash) + chr
            hash |= 0 // Convert to 32bit integer
        }
        return hash
    }

    /**
     * Convert bytes
     * @param {int} x
     * @returns {string}
     */
     function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['bytes', 'Kb', 'MB', 'GB', 'TB', 'PiB', 'EiB', 'ZiB', 'YiB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
    /**
     * Strips HTML from string
     * @param {*} str
     * @returns {string}
     */
    function stripHTML(str){
        const div = document.createElement('div')
        div.innerHTML = str
        const  text = div.textContent || div.innerText || ''
        return text
    }
    /**
     * Detects language syntax and library/framework
     * @param {*} str
     * @returns {string}
     */
    function syntaxDetect(str){
        // const languages = {
        //     javascript : /(function|var|let|const|if|else|for|while|switch|case|break|return|console\.log)\b/,
        //     php : /(<?php\b|echo|print|function|class|public|private|protected|require|include|return)\b/,
        //     html : /(<html>|<head>|<body>|<title>|<div>|<p>|<a>|<img>|<h[1-6]>|<ul>|<ol>|<li>|<table>|<tr>|<td>|<th>|<form>|<input>|<button>|<script>|<style>|<link>|<meta>|<!DOCTYPE html>|<!DOCTYPE HTML>)/,
        //     css : /(\{|\}|:|;|\.[a-zA-Z0-9_-]+|#[a-fA-F0-9]{3,6}|[0-9]+(px|em|rem|%|in|cm|mm|pt|pc|vh|vw|vmin|vmax|deg)|@(media|keyframes|font-face))/,
        //     pyhton : /(def|class|if|else|elif|for|while|try|except|import|from|as|return|print|True|False|None|self)\b/,
        //     c : /\b#include\b|\bprintf\b|std::|iostream|cout|cin|\bint main\b|\bclass\b|template\b/,
        //     ruby : /\bdef\b|\bclass\b|\bmodule\b|\.rb$|puts\b|gets\b|print\b|<%|%>|@\w+/,
        //     rust : /\blet\b|\bfn\b|\bstruct\b|\benum\b|->|::|\bimpl\b|match\b|Rustacean/,
        //     bash : /^#!\/bin\/bash$|\becho\b|\bif\b|\bthen\b|\bfi\b|\bdo\b|\bdone\b|\bexit\b|=\$\(.*\)|\$\w+/
        // }
        // const regex = (pattern,str) => new RegExp(pattern).test(str),match = Object.keys(languages).filter( language => {
        //     return regex(languages[language],str)
        // })[0]
        // if(match === 'javascript'){
        //     if(regex(/(React|ReactDOM)\./,str)) {
        //         match += '/react'
        //     }else if(regex(/Vue\./,str)){
        //         match += '/vue'
        //     }else if(regex(/require\(.+?\)|process\..+?|module\.exports|exports\..+?/)){
        //         match += '/NodeJS'
        //     }
        // }else if(match === 'PHP'){
        //     if(regex(/(Laravel|Illuminate)\./,str)){
        //         match += '/Laravel'
        //     }else if(regex(/use\s+Symfony\\Component\\.+?|new\s+Symfony\\Component\\.+?/,str)){
        //         match += '/Symfony'
        //     }
        // }
        // return match
        return detectLang(str)
    }
    /**
     *
     * @param {*} str
     * @returns
     */
    function syntaxHighlight(str){
        // const strReg1 = /"(.*?)"/g,
        //       strReg2 = /'(.*?)'/g,
        //       specialReg = /\b(import|export|from|new|const|var|if|else|{|}|do|return|function|while|switch|for|foreach|in|continue|break)(?=[^\w])/g,
        //       specialJsGlobReg = /\b(document|window|Array|String|Object|Number|\$)(?=[^\w])/g,
        //       specialJsReg = /\b(getElementsBy(TagName|ClassName|Name)|getElementById|typeof|instanceof)(?=[^\w])/g,
        //       specialMethReg = /\b(indexOf|match|replace|toString|length)(?=[^\w])/g,
        //       specialPhpReg  = /\b(define|echo|print_r|new|false|var_dump)(?=[^\w])/g,
        //       specialCommentReg  = /(\/\*.*\*\/)/g,
        //       inlineCommentReg = /(\/\/.*)/g;

        // const htmlTagReg = /(&lt;[^\&]*&gt;)/g;

        // let  parsed = str.replace(strReg1,'<span class="salmon">"$1"</span>');
        //      parsed = parsed.replace(strReg2,"<span class=\"salmon\">'$1'</span>");
        //      parsed = parsed.replace(specialReg,'<span class="purple">$1</span>');
        //      parsed = parsed.replace(specialJsGlobReg,'<span class="lightblue">$1</span>');
        //      parsed = parsed.replace(specialJsReg,'<span class="lightyellow">$1</span>');
        //      parsed = parsed.replace(specialMethReg,'<span class=lightyellow">$1</span>');
        //      parsed = parsed.replace(htmlTagReg,'<span class="lightblue">$1</span>');
        //      parsed = parsed.replace(specialPhpReg,'<span class="blue">$1</span>');
        //      parsed = parsed.replace(specialCommentReg,'<span class="darkgreen">$1</span>');
        //      parsed = parsed.replace(inlineCommentReg,'<span class="darkgreen">$1</span>');
        // return parsed
        if(syntaxDetect(str) === 'Unknown') return str
        console.log(syntaxDetect(str))
        return hljs.highlight(
            str,
            { language: syntaxDetect(str).toLowerCase() }
          ).value
    }
    function md(input) {
        return marked.parse(input)
    }
    return methods
})()
