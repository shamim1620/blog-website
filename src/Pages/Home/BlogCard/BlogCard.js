import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BlogCard = ({ blog }) => {
    const { blogTitle, article, blogImage } = blog;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${blogImage}`} />
                    <Card.Body>
                        <Card.Title>{blogTitle}</Card.Title>
                        <Card.Text>
                            {article}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default BlogCard;