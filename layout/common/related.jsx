const logger = require('hexo-log')();
const { Component } = require('inferno');
const view = require('hexo-component-inferno/lib/core/view');


module.exports = class extends Component {
    render() {
        const { config, helper, page } = this.props;
        const { __, popular_posts } = helper;
        let relatedText = popular_posts( {} , page )
        if (!relatedText || relatedText.length == 0) {
            return null;
        }
        return <div class="card">
            <div class="card-content">
                <h3>相关文章</h3>
                <span
            dangerouslySetInnerHTML={{__html:(relatedText) }}>
            </span>
            </div>
        </div>;
    }
};
