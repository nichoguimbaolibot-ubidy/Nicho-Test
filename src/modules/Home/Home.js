import React, { Component } from 'react';
import NumericInput from '../../components/InputNumber';
import { Row, Col, Input,DatePicker, Button,Form, Select, Layout, Menu} from 'antd';
const { Content,Sider} = Layout;
const FormItem = Form.Item;
const Option = Select.Option;


const value ={
  onchange: (date, dateString)=>{
   console.log(date, dateString);    
  },
  handleChange: (value)=>{
    console.log(value);
  },
  handleChangeCountry: (value) =>{
    console.log(value);
  }
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {value: ""}; 
  }
  onChange = (value)=>{
    this.setState({
      value
    });
  }
  render() {
    return (
         
      <div>
        <Content style={{ padding: '0px 50px' }}> 
        Account Settings
        <br/>
        My Account   
        <br/> 
        User Management
            <Layout style={{ padding: '24px 0px', background: '#fff', borderColor:'#000000' }}>  
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
              <Menu.Item key="1">Personal Settings</Menu.Item>
              <Menu.Item key="2">Account Settings</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0px 24px', minHeight: 280 }}>
          <Row className="exp">
              <Form className="table">
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                Personal Information
                    <FormItem label="First Name">
                      <Input placeholder="dave" />
                    </FormItem>
                    <FormItem label="Job Title">
                    <Select defaultValue="Please select..." style={{ width: 220 }} onChange={value.handleChangeJob}>
                      <Option value="Philippines">Software Engineer</Option>
                      <Option value="Frontend Developer">Frontend Developer</Option>
                      <Option value="Backend Developer">Backend Developer</Option>
                      <Option value="NodeJS Developer">NodeJS Developer</Option>
                    </Select>
                    </FormItem>
                    <FormItem label="Mobile Number">
                      <NumericInput value={this.state.value} onChange={(value) => this.onChange(value)} />
                      {/* <InputNumber value={63} min="63"  placeholder="69696969" /> */}
                    </FormItem>  
                    <FormItem label="Birth Date">
                      <DatePicker onChange={value.onchange} />
                    <Button type="primary">Update</Button>
                    </FormItem>
                </Col>
                <div>
                <br/>  
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <FormItem label="Last Name">
                      <Input placeholder="dave" />
                    </FormItem>  
                    <FormItem label="Email Address">
                      <Input placeholder="dave@gmail.com" />
                    </FormItem>    
                    <FormItem label="Skype Address">
                      <Input placeholder="kirbyy" />
                    </FormItem>  
                    <FormItem label="Country">
                      <Select defaultValue="Please select..." style={{ width: 220 }} onChange={value.handleChangeCountry}>
                        <Option value="Philippines">Philippines</Option>
                        <Option value="Syria">Syria</Option>
                        <Option value="Japan">Japan</Option>
                        <Option value="China">China</Option>
                      </Select>
                    </FormItem>  
                  </Col>
                  </div>
                  <div>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  Account Picture
                    </Col>
                  </div>
            </Form>    
          </Row>

        </Content>
      </Layout>
    </Content> </div>
    )
  }
}

export default Home;
