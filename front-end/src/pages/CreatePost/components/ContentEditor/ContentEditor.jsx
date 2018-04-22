import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Grid, Form, Button, Select } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import { axios } from '../../../../configuration'
import RichEditor from './RichEditor';
import { hashHistory } from 'react-router';


const { Row, Col } = Grid;
const FormItem = Form.Item;

export default class ContentEditor extends Component {
  static displayName = 'ContentEditor';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {},
    };
  }

  formChange = (value) => {
    // console.log('value', value);
    this.setState({
      value,
    });
  };

  handleSubmit = () => {
    this.postForm.validateAll(async (errors, values) => {
      console.log('errors', errors, 'values', values);
      if (errors) {
        return false;
      }
      // ajax values
      // 添加校友
      try {
        await axios.post('/api/schoolmate/add', values)
        hashHistory.push('/post/list')
      } catch (error) {
        console.log(error)
      }
    });
  };

  render() {
    return (
      <div className="content-editor">
        <IceFormBinderWrapper
          ref={(refInstance) => {
            this.postForm = refInstance;
          }}
          value={this.state.value}
          onChange={this.formChange}
        >
          <IceContainer>
            <h2 style={styles.title}>添加校友</h2>
            <Form labelAlign="top" style={styles.form}>
              <Row>
                <Col span="11">
                  <FormItem label="名字" required>
                    <IceFormBinder name="name" required message="名字必填">
                      <Input placeholder="这里填写校友名字" />
                    </IceFormBinder>
                    <IceFormError name="name" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="11">
                  <FormItem label="手机" required>
                    <IceFormBinder name="phone" required message="手机必填">
                      <Input placeholder="这里填写校友手机" />
                    </IceFormBinder>
                    <IceFormError name="phone" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="11">
                  <FormItem label="QQ" required>
                    <IceFormBinder name="qq" required message="QQ必填">
                      <Input placeholder="这里填写校友QQ" />
                    </IceFormBinder>
                    <IceFormError name="qq" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="11">
                  <FormItem label="微信" required>
                    <IceFormBinder name="wechat" required message="微信必填">
                      <Input placeholder="这里填写校友微信" />
                    </IceFormBinder>
                    <IceFormError name="wechat" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="11">
                  <FormItem label="学院" required>
                    <IceFormBinder name="college" required message="学院必填">
                      <Input placeholder="这里填写校友学院" />
                    </IceFormBinder>
                    <IceFormError name="college" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="11">
                  <FormItem label="班级" required>
                    <IceFormBinder name="theClass" required message="班级必填">
                      <Input placeholder="这里填写校友班级" />
                    </IceFormBinder>
                    <IceFormError name="theClass" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="11">
                  <FormItem label="地址" required>
                    <IceFormBinder name="address" required message="地址必填">
                      <Input placeholder="这里填写校友地址" />
                    </IceFormBinder>
                    <IceFormError name="address" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="11">
                  <FormItem label="毕业年份" required>
                    <IceFormBinder
                      name="graduationYear"
                      required
                      message="毕业年份必填"
                    >
                      <Input placeholder="填写校友毕业年份" />
                    </IceFormBinder>
                    <IceFormError name="graduationYear" />
                  </FormItem>
                </Col>
                {/* <Col span="11" offset="2">
                  <FormItem label="分类" required>
                    <IceFormBinder
                      name="cats"
                      required
                      type="array"
                      message="分类必填支持多个"
                    >
                      <Select
                        style={styles.cats}
                        multiple
                        placeholder="请选择分类"
                        dataSource={[
                          { label: '分类1', value: 'cat1' },
                          { label: '分类2', value: 'cat2' },
                          { label: '分类3', value: 'cat3' },
                        ]}
                      />
                    </IceFormBinder>
                    <IceFormError
                      name="cats"
                      render={(errors) => {
                        console.log('errors', errors);
                        return (
                          <div>
                            <span style={{ color: 'red' }}>
                              {errors.map(item => item.message).join(',')}
                            </span>
                            <span style={{ marginLeft: 10 }}>
                              不知道选择什么分类？请 <a href="#">点击这里</a>{' '}
                              查看
                            </span>
                          </div>
                        );
                      }}
                    />
                  </FormItem>
                </Col> */}
              </Row>
              {/* <FormItem label="描述">
                <IceFormBinder name="desc">
                  <Input multiple placeholder="这里填写正文描述" />
                </IceFormBinder>
              </FormItem>
              <FormItem label="正文" required>
                <IceFormBinder name="body">
                  <RichEditor />
                </IceFormBinder>
              </FormItem> */}
              <FormItem label=" ">
                <Button type="primary" onClick={this.handleSubmit}>
                  添加校友
                </Button>
              </FormItem>
            </Form>
          </IceContainer>
        </IceFormBinderWrapper>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: '0px 0px 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  form: {
    marginTop: 30,
  },
  cats: {
    width: '100%',
  },
};
