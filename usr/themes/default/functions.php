<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;

function themeConfig($form)
{
    $logoUrl = new \Typecho\Widget\Helper\Form\Element\Text(
        'logoUrl',
        null,
        null,
        _t('站点 LOGO 地址'),
        _t('在这里填入一个图片 URL 地址, 以在网站标题前加上一个 LOGO')
    );

    $form->addInput($logoUrl);

    $sidebarBlock = new \Typecho\Widget\Helper\Form\Element\Checkbox(
        'sidebarBlock',
        [
            'ShowRecentPosts'    => _t('显示最新文章'),
            'ShowRecentComments' => _t('显示最近回复'),
            'ShowCategory'       => _t('显示分类'),
            'ShowArchive'        => _t('显示归档'),
            'ShowOther'          => _t('显示其它杂项')
        ],
        ['ShowRecentPosts', 'ShowRecentComments', 'ShowCategory', 'ShowArchive', 'ShowOther'],
        _t('侧边栏显示')
    );

    $form->addInput($sidebarBlock->multiMode());
}


function themeFields($layout)
{

/** 主题自定义字段各模板
    $text = new \Typecho\Widget\Helper\Form\Element\Text(
        'FieldText',
        null,
        null,
        _t('单行文本'),
        _t('描述')
    );
    $layout->addItem($text);

    $radio = new \Typecho\Widget\Helper\Form\Element\Radio(
        'FieldRadio',
        [
            0 => _t('选项一'),
            1 => _t('选项二'),
            2 => _t('选项三')
        ],
        0,
        _t('单选框')
    );
    $layout->addItem($radio);

    $checkbox = new \Typecho\Widget\Helper\Form\Element\Checkbox(
        'FieldCheckbox',
        [
            'choose1'    => _t('香蕉'),
            'choose2'    => _t('苹果'),
            'choose3'    => _t('鸭梨')
        ],
        null,
        _t('复选框')
    );
    // $layout->addItem($checkbox);
    $layout->addItem($checkbox->multiMode());

    $select = new \Typecho\Widget\Helper\Form\Element\Select(
        'FieldSelect',
        [
            'show' => '显示',
            'hide' => '不显示'
        ],
        'show',
        _t('下拉选择'),
        _t('是否在本篇文章底部显示版权声明')
    );
    $layout->addItem($select);

    $password = new \Typecho\Widget\Helper\Form\Element\Password(
        'FieldPassword',
        null,
        null,
        _t('密码'),
        _t('建议使用特殊字符与字母、数字的混编样式.')
    );
    // $password->input->setAttribute('class', 'w-60');
    $layout->addItem($password);

    $textarea = new \Typecho\Widget\Helper\Form\Element\Textarea(
        'FieldTextarea',
        null,
        "L1\nL2\nL3",
        _t('多行文字')
    );
    $layout->addItem($textarea);
*/

}

