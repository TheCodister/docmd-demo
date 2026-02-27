/*!
 * --------------------------------------------------------------------
 * docmd : the minimalist, zero-config documentation generator.
 *
 * @package     @docmd/core (and ecosystem)
 * @website     https://docmd.io
 * @repository  https://github.com/docmd-io/docmd
 * @license     MIT
 * @copyright   Copyright (c) 2025-present docmd.io
 *
 * [docmd-source] - Please do not remove this header.
 * --------------------------------------------------------------------
 */
import r from"https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";(async function(){"use strict";const a=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"default";r.initialize({startOnLoad:!1,theme:a,securityLevel:"loose",fontFamily:"inherit"});async function t(){try{await r.run({querySelector:".mermaid"})}catch(e){console.error("Mermaid rendering failed:",e)}}new MutationObserver(async e=>{for(const n of e)n.attributeName==="data-theme"&&location.reload()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()})();
