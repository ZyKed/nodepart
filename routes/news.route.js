const newsService = require('../services/news.service');
function news(req, res) {
    newsService.news(function (err, newsdata) {
        if (err)
            return res.json({ success: false, message: 'some error' + err });
        if (!newsdata) {
            return res.json({ success: false, message: 'not found' });
        } else {
            return res.json({ success: true, message: newsdata });
        }
    });
}
module.exports.news = news;