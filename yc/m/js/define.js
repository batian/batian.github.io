/**
 * Created by he.zhiyi on 15/4/17.
 */



var M_URL_QUOTEDATA = 'http://xmcce.com.cn/k-data/data1.php' ;
var M_URL_HISDATA = 'http://112.74.84.66:16020/quotes/hisquotes_data.js' ;


var g_symbolName = [] ;

// 商品信息
//g_symbolName['Ag200KG']   = '自贸银200千克' ;
//g_symbolName['Ag100KG']   = '自贸银100千克' ;
//g_symbolName['Ag10KG']  = '自贸银10千克' ;
g_symbolName['OIL200T']  = '自贸油200吨' ;
g_symbolName['OIL100T']  = '自贸油100吨' ;
g_symbolName['OIL10T']  = '自贸油10吨' ;
g_symbolName['CU5T']    = '自贸铜5T' ;
g_symbolName['CU1T']   = '自贸铜1T' ;
g_symbolName['Al5T']   = '自贸铝5T' ;
g_symbolName['Al1T']   = '自贸铝1T' ;
g_symbolName['HM']   = '红木' ;
g_symbolName['PTA']  = 'PTA' ;


var g_menu = [] ;
//g_menu['m1'] ={text:'自贸银',children:  [
//        ['Ag10KG','自贸银10千克'],
//        ['Ag100KG','自贸银100千克'],
//        ['Ag200KG','自贸银200千克']
//    ]} ;
    
g_menu['m2'] ={text:'自贸油',children:  [
        ['OIL10T','自贸油10吨'],
        ['OIL100T','自贸油100吨'],
        ['OIL200T','自贸油200吨']
    ]} ;
    g_menu['m3']={text:'自贸铜',children: [
        ['CU5T','自贸铜5T'],
        ['CU1T','自贸铜1T']
    ]} ;

g_menu['m4'] ={text:'自贸铝',children: [
        ['Al5T','自贸铝5T'],
        ['Al1T','自贸铝1T']
    ]} ;

