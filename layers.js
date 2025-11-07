var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JangkauanFasilitasKesehatan_1 = new ol.format.GeoJSON();
var features_JangkauanFasilitasKesehatan_1 = format_JangkauanFasilitasKesehatan_1.readFeatures(json_JangkauanFasilitasKesehatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanFasilitasKesehatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanFasilitasKesehatan_1.addFeatures(features_JangkauanFasilitasKesehatan_1);
var lyr_JangkauanFasilitasKesehatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JangkauanFasilitasKesehatan_1, 
                style: style_JangkauanFasilitasKesehatan_1,
                popuplayertitle: 'Jangkauan Fasilitas Kesehatan',
                interactive: true,
    title: 'Jangkauan Fasilitas Kesehatan<br />\
    <img src="styles/legend/JangkauanFasilitasKesehatan_1_0.png" /> Sangat Dekat<br />\
    <img src="styles/legend/JangkauanFasilitasKesehatan_1_1.png" /> Dekat<br />\
    <img src="styles/legend/JangkauanFasilitasKesehatan_1_2.png" /> Sedang<br />\
    <img src="styles/legend/JangkauanFasilitasKesehatan_1_3.png" /> Jauh<br />' });
var format_jalan_kota_yogyakarta_2 = new ol.format.GeoJSON();
var features_jalan_kota_yogyakarta_2 = format_jalan_kota_yogyakarta_2.readFeatures(json_jalan_kota_yogyakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_kota_yogyakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_kota_yogyakarta_2.addFeatures(features_jalan_kota_yogyakarta_2);
var lyr_jalan_kota_yogyakarta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_kota_yogyakarta_2, 
                style: style_jalan_kota_yogyakarta_2,
                popuplayertitle: 'jalan_kota_yogyakarta',
                interactive: true,
                title: '<img src="styles/legend/jalan_kota_yogyakarta_2.png" /> jalan_kota_yogyakarta'
            });
var format_sebaran_rumah_sakit_di_kota_yogyakarta_3 = new ol.format.GeoJSON();
var features_sebaran_rumah_sakit_di_kota_yogyakarta_3 = format_sebaran_rumah_sakit_di_kota_yogyakarta_3.readFeatures(json_sebaran_rumah_sakit_di_kota_yogyakarta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sebaran_rumah_sakit_di_kota_yogyakarta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sebaran_rumah_sakit_di_kota_yogyakarta_3.addFeatures(features_sebaran_rumah_sakit_di_kota_yogyakarta_3);
var lyr_sebaran_rumah_sakit_di_kota_yogyakarta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sebaran_rumah_sakit_di_kota_yogyakarta_3, 
                style: style_sebaran_rumah_sakit_di_kota_yogyakarta_3,
                popuplayertitle: 'sebaran_rumah_sakit_di_kota_yogyakarta',
                interactive: true,
                title: '<img src="styles/legend/sebaran_rumah_sakit_di_kota_yogyakarta_3.png" /> sebaran_rumah_sakit_di_kota_yogyakarta'
            });
var format_sebaran_klinik_di_kota_yogyakarta_4 = new ol.format.GeoJSON();
var features_sebaran_klinik_di_kota_yogyakarta_4 = format_sebaran_klinik_di_kota_yogyakarta_4.readFeatures(json_sebaran_klinik_di_kota_yogyakarta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sebaran_klinik_di_kota_yogyakarta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sebaran_klinik_di_kota_yogyakarta_4.addFeatures(features_sebaran_klinik_di_kota_yogyakarta_4);
var lyr_sebaran_klinik_di_kota_yogyakarta_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sebaran_klinik_di_kota_yogyakarta_4, 
                style: style_sebaran_klinik_di_kota_yogyakarta_4,
                popuplayertitle: 'sebaran_klinik_di_kota_yogyakarta',
                interactive: true,
                title: '<img src="styles/legend/sebaran_klinik_di_kota_yogyakarta_4.png" /> sebaran_klinik_di_kota_yogyakarta'
            });
var format_sebaran_puskesmas_di_kota_yogyakarta_5 = new ol.format.GeoJSON();
var features_sebaran_puskesmas_di_kota_yogyakarta_5 = format_sebaran_puskesmas_di_kota_yogyakarta_5.readFeatures(json_sebaran_puskesmas_di_kota_yogyakarta_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sebaran_puskesmas_di_kota_yogyakarta_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sebaran_puskesmas_di_kota_yogyakarta_5.addFeatures(features_sebaran_puskesmas_di_kota_yogyakarta_5);
var lyr_sebaran_puskesmas_di_kota_yogyakarta_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sebaran_puskesmas_di_kota_yogyakarta_5, 
                style: style_sebaran_puskesmas_di_kota_yogyakarta_5,
                popuplayertitle: 'sebaran_puskesmas_di_kota_yogyakarta',
                interactive: true,
                title: '<img src="styles/legend/sebaran_puskesmas_di_kota_yogyakarta_5.png" /> sebaran_puskesmas_di_kota_yogyakarta'
            });
var format_Fasilitas_Kesehatan_Merge_UTM_6 = new ol.format.GeoJSON();
var features_Fasilitas_Kesehatan_Merge_UTM_6 = format_Fasilitas_Kesehatan_Merge_UTM_6.readFeatures(json_Fasilitas_Kesehatan_Merge_UTM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Kesehatan_Merge_UTM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Kesehatan_Merge_UTM_6.addFeatures(features_Fasilitas_Kesehatan_Merge_UTM_6);
var lyr_Fasilitas_Kesehatan_Merge_UTM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Kesehatan_Merge_UTM_6, 
                style: style_Fasilitas_Kesehatan_Merge_UTM_6,
                popuplayertitle: 'Fasilitas_Kesehatan_Merge_UTM',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Kesehatan_Merge_UTM_6.png" /> Fasilitas_Kesehatan_Merge_UTM'
            });
var format_ar_batas_administrasi_kecamatan_kota_yogyakarta_7 = new ol.format.GeoJSON();
var features_ar_batas_administrasi_kecamatan_kota_yogyakarta_7 = format_ar_batas_administrasi_kecamatan_kota_yogyakarta_7.readFeatures(json_ar_batas_administrasi_kecamatan_kota_yogyakarta_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ar_batas_administrasi_kecamatan_kota_yogyakarta_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ar_batas_administrasi_kecamatan_kota_yogyakarta_7.addFeatures(features_ar_batas_administrasi_kecamatan_kota_yogyakarta_7);
var lyr_ar_batas_administrasi_kecamatan_kota_yogyakarta_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ar_batas_administrasi_kecamatan_kota_yogyakarta_7, 
                style: style_ar_batas_administrasi_kecamatan_kota_yogyakarta_7,
                popuplayertitle: 'ar_batas_administrasi_kecamatan_kota_yogyakarta',
                interactive: true,
                title: '<img src="styles/legend/ar_batas_administrasi_kecamatan_kota_yogyakarta_7.png" /> ar_batas_administrasi_kecamatan_kota_yogyakarta'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_JangkauanFasilitasKesehatan_1.setVisible(true);lyr_jalan_kota_yogyakarta_2.setVisible(true);lyr_sebaran_rumah_sakit_di_kota_yogyakarta_3.setVisible(true);lyr_sebaran_klinik_di_kota_yogyakarta_4.setVisible(true);lyr_sebaran_puskesmas_di_kota_yogyakarta_5.setVisible(true);lyr_Fasilitas_Kesehatan_Merge_UTM_6.setVisible(true);lyr_ar_batas_administrasi_kecamatan_kota_yogyakarta_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JangkauanFasilitasKesehatan_1,lyr_jalan_kota_yogyakarta_2,lyr_sebaran_rumah_sakit_di_kota_yogyakarta_3,lyr_sebaran_klinik_di_kota_yogyakarta_4,lyr_sebaran_puskesmas_di_kota_yogyakarta_5,lyr_Fasilitas_Kesehatan_Merge_UTM_6,lyr_ar_batas_administrasi_kecamatan_kota_yogyakarta_7];
lyr_JangkauanFasilitasKesehatan_1.set('fieldAliases', {'fid': 'fid', 'Jangkauan1': 'Jangkauan1', 'fid_2': 'fid_2', 'Jangkauan': 'Jangkauan', 'luaswh': 'luaswh', 'wadmkc': 'wadmkc', 'Jangakauan2': 'Jangakauan2', });
lyr_jalan_kota_yogyakarta_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'namrjl': 'namrjl', 'konrjl': 'konrjl', 'matrjl': 'matrjl', 'fgsrjl': 'fgsrjl', 'utkrjl': 'utkrjl', 'tolrjl': 'tolrjl', 'wlyrjl': 'wlyrjl', 'autrjl': 'autrjl', 'klsrjl': 'klsrjl', 'spcrjl': 'spcrjl', 'jparjl': 'jparjl', 'arhrjl': 'arhrjl', 'starjl': 'starjl', 'kllrjl': 'kllrjl', 'medrjl': 'medrjl', 'locrjl': 'locrjl', 'jarrjl': 'jarrjl', 'fcode': 'fcode', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'shape_leng': 'shape_leng', });
lyr_sebaran_rumah_sakit_di_kota_yogyakarta_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'no': 'no', 'nama_rumah': 'nama_rumah', 'alamat': 'alamat', 'longitude': 'longitude', 'latitude (': 'latitude (', });
lyr_sebaran_klinik_di_kota_yogyakarta_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'no': 'no', 'nama_klini': 'nama_klini', 'alamat': 'alamat', 'longitude': 'longitude', 'latitude (': 'latitude (', });
lyr_sebaran_puskesmas_di_kota_yogyakarta_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'no': 'no', 'nama_puske': 'nama_puske', 'alamat': 'alamat', 'longitude': 'longitude', 'latitude (': 'latitude (', });
lyr_Fasilitas_Kesehatan_Merge_UTM_6.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'no': 'no', 'nama_klini': 'nama_klini', 'alamat': 'alamat', 'longitude': 'longitude', 'latitude (': 'latitude (', 'nama_puske': 'nama_puske', 'nama_rumah': 'nama_rumah', 'layer': 'layer', 'path': 'path', });
lyr_ar_batas_administrasi_kecamatan_kota_yogyakarta_7.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkd': 'wiadkd', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', 'namobj': 'namobj', });
lyr_JangkauanFasilitasKesehatan_1.set('fieldImages', {'fid': 'TextEdit', 'Jangkauan1': 'TextEdit', 'fid_2': 'TextEdit', 'Jangkauan': 'TextEdit', 'luaswh': 'TextEdit', 'wadmkc': 'TextEdit', 'Jangakauan2': 'TextEdit', });
lyr_jalan_kota_yogyakarta_2.set('fieldImages', {'ogc_fid': 'Range', 'namrjl': 'TextEdit', 'konrjl': 'TextEdit', 'matrjl': 'TextEdit', 'fgsrjl': 'TextEdit', 'utkrjl': 'TextEdit', 'tolrjl': 'TextEdit', 'wlyrjl': 'TextEdit', 'autrjl': 'TextEdit', 'klsrjl': 'TextEdit', 'spcrjl': 'TextEdit', 'jparjl': 'TextEdit', 'arhrjl': 'TextEdit', 'starjl': 'TextEdit', 'kllrjl': 'TextEdit', 'medrjl': 'TextEdit', 'locrjl': 'TextEdit', 'jarrjl': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_sebaran_rumah_sakit_di_kota_yogyakarta_3.set('fieldImages', {'ogc_fid': 'Range', 'no': 'TextEdit', 'nama_rumah': 'TextEdit', 'alamat': 'TextEdit', 'longitude': 'TextEdit', 'latitude (': 'TextEdit', });
lyr_sebaran_klinik_di_kota_yogyakarta_4.set('fieldImages', {'ogc_fid': 'Range', 'no': 'TextEdit', 'nama_klini': 'TextEdit', 'alamat': 'TextEdit', 'longitude': 'TextEdit', 'latitude (': 'TextEdit', });
lyr_sebaran_puskesmas_di_kota_yogyakarta_5.set('fieldImages', {'ogc_fid': 'Range', 'no': 'TextEdit', 'nama_puske': 'TextEdit', 'alamat': 'TextEdit', 'longitude': 'TextEdit', 'latitude (': 'TextEdit', });
lyr_Fasilitas_Kesehatan_Merge_UTM_6.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'no': 'TextEdit', 'nama_klini': 'TextEdit', 'alamat': 'TextEdit', 'longitude': 'TextEdit', 'latitude (': 'TextEdit', 'nama_puske': 'TextEdit', 'nama_rumah': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ar_batas_administrasi_kecamatan_kota_yogyakarta_7.set('fieldImages', {'ogc_fid': 'Range', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkd': 'Range', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', 'namobj': 'TextEdit', });
lyr_JangkauanFasilitasKesehatan_1.set('fieldLabels', {'fid': 'no label', 'Jangkauan1': 'no label', 'fid_2': 'no label', 'Jangkauan': 'no label', 'luaswh': 'no label', 'wadmkc': 'no label', 'Jangakauan2': 'no label', });
lyr_jalan_kota_yogyakarta_2.set('fieldLabels', {'ogc_fid': 'no label', 'namrjl': 'no label', 'konrjl': 'no label', 'matrjl': 'no label', 'fgsrjl': 'no label', 'utkrjl': 'no label', 'tolrjl': 'no label', 'wlyrjl': 'no label', 'autrjl': 'no label', 'klsrjl': 'no label', 'spcrjl': 'no label', 'jparjl': 'no label', 'arhrjl': 'no label', 'starjl': 'no label', 'kllrjl': 'no label', 'medrjl': 'no label', 'locrjl': 'no label', 'jarrjl': 'no label', 'fcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'shape_leng': 'no label', });
lyr_sebaran_rumah_sakit_di_kota_yogyakarta_3.set('fieldLabels', {'ogc_fid': 'no label', 'no': 'no label', 'nama_rumah': 'no label', 'alamat': 'no label', 'longitude': 'no label', 'latitude (': 'no label', });
lyr_sebaran_klinik_di_kota_yogyakarta_4.set('fieldLabels', {'ogc_fid': 'no label', 'no': 'no label', 'nama_klini': 'no label', 'alamat': 'no label', 'longitude': 'no label', 'latitude (': 'no label', });
lyr_sebaran_puskesmas_di_kota_yogyakarta_5.set('fieldLabels', {'ogc_fid': 'no label', 'no': 'no label', 'nama_puske': 'no label', 'alamat': 'no label', 'longitude': 'no label', 'latitude (': 'no label', });
lyr_Fasilitas_Kesehatan_Merge_UTM_6.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'no': 'no label', 'nama_klini': 'no label', 'alamat': 'no label', 'longitude': 'no label', 'latitude (': 'no label', 'nama_puske': 'no label', 'nama_rumah': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ar_batas_administrasi_kecamatan_kota_yogyakarta_7.set('fieldLabels', {'ogc_fid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'kdbbps': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdpbps': 'no label', 'kdpkab': 'no label', 'kdppum': 'no label', 'luaswh': 'no label', 'tipadm': 'no label', 'wadmkc': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'wiadkd': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', 'namobj': 'no label', });
lyr_ar_batas_administrasi_kecamatan_kota_yogyakarta_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});