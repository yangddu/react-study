import React from 'react';

const Post = (props) => {

    return (
        <React.Fragment>
            <div>
                user profile / user name / insert_dt / is_me edit btn
            </div>
            <div>
                contents
            </div>
            <div>
                image
            </div>
            <div>
                comment cnt
            </div>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info : {
        user_name: 'mean0',
        user_profile: 'https://cherryiscute.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-08-22+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.56.01.png',
    },
    image_url : "https://cherryiscute.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-08-22+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.56.01.png",
    contents: '체리에요',
    comment_cnt: 10,
    insert_dt: '2021-02-27 10:00:00'
};

export default Post;