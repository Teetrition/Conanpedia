var pageTitle = document.querySelector('h1').innerHTML;
pageTitle = pageTitle.replace('的版本间的差异', '<span lang="zh">的版本间的差异</span>');
pageTitle = pageTitle.replace('编辑', '<span lang="zh">编辑</span>');
pageTitle = pageTitle.replace('正在创建', '<span lang="zh">正在创建</span>');
document.querySelector('h1').innerHTML = pageTitle;
document.querySelector('h1').setAttribute('lang', 'ja');