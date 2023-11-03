import { Text, StyleSheet, View, ScrollView, SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
import Header from '../componnets/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ImageBackground } from 'react-native'

export default function Usage_Rules ({navigation}) {
  return (
    <View style={{flex:1}}>
    <ImageBackground source={require('../Img/Rectangle_2.png')} style={{flex: 0.15}} resizeMode="cover">
          <SafeAreaView>
            <TouchableOpacity style={{position: 'absolute', top: 60, left: 20}} onPress={() => navigation.navigate("Account")}>
          <AntDesign name="arrowleft" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{position: 'absolute', top: 60, right: 20}} onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
   <ScrollView style={styles.container}>
   <Text>
    <Text style={styles.text_Header}>
   QUY ĐỊNH CHUNG
    </Text>
    <Text>

    Chào mừng bạn đến với phần mềm MEDPRO - Đặt lịch khám bệnh (gọi chung là "Phần mềm"). Vui lòng đọc kỹ các Quy Định Sử Dụng dưới đây trước khi tiếp tục truy cập hoặc sử dụng các dịch vụ của Phần mềm, để bạn biết được các quyền lợi và nghĩa vụ hợp pháp của mình liên quan đến các vấn đề về việc đăng ký khám bệnh, thanh toán, nhận phiếu khám bệnh, tạo hồ sơ bệnh nhân, quản lý và sử dụng thông tin trong hồ sơ bệnh nhân, quản lý phiếu khám bệnh, hoàn tiền, hủy phiếu khám bệnh, sửa thông tin phiếu khám bệnh, cách giải quyết các sự cố.... trong quá trình sử dụng Phần mềm.
    </Text>

    Các định nghĩa:

    Chúng tôi: theo ngữ cảnh có thể là công ty cổ phần ứng dụng PKH, và/hoặc các bên đơn vị khác có liên kết trên Phần mềm.
    Dịch vụ: là một hoặc một phần hoặc tất cả các tính năng và tiện ích được triển khai trên Phần mềm.
    Bạn: theo ngữ cảnh có thể là người dùng, hoặc bệnh nhân, hoặc người được bệnh nhân đã ủy quyền bằng văn bản, lời nói hoặc một hình thức khác, để truy cập Phần mềm hoặc đăng ký sử dụng các Dịch Vụ trên Phần mềm giúp cho bệnh nhân.
    ĐĂNG NHẬP

    Bạn phải đăng nhập mới có thể sử dụng đầy đủ các Dịch vụ của Phần mềm.
    Phần mềm định danh tài khoản của bạn bằng số điện thoại di động bạn đang sử dụng, vì vậy trong trường hợp bạn không còn hoặc mất quyền kiểm soát hay sở hữu đối với số điện thoại di động của mình, bạn hãy liên hệ ngay với chúng tôi qua tổng đài 1900 2115 hoặc email hotro@medpro.com.vn, chúng tôi sẽ hỗ trợ bạn.
    THÔNG TIN BỆNH NHÂN

    Chúng tôi cho phép bạn có thể nhập và tra cứu hoặc tìm lại mã số bệnh nhân (hay còn gọi “số hồ sơ”) của mình, để xem được các thông tin tương ứng với số hồ sơ vừa nhập hoặc vừa tra cứu được.
    Tính năng này chỉ giới hạn ở một mục đích duy nhất là: để bạn xem, kiểm tra và xác định được chính xác hồ sơ bệnh nhân của mình khi đăng ký khám bệnh hoặc xem lịch hẹn tái khám của bản thân.
    Bạn sẽ chịu hoàn toàn trách nhiệm và trách nhiệm pháp lý nếu có hành vi sử dụng tính năng nhập và tìm lại mã số bệnh nhân không đúng với mục đích nêu trên.
    SỐ CHUYÊN KHOA ĐĂNG KÝ

    Trong cùng một lượt đăng ký khám, bạn có thể đăng ký nhiều chuyên khoa với điều kiện:
    Phải đăng ký cùng 1 ngày khám.
    Không được trùng nhau.
    Khi đăng ký nhiều chuyên khoa trong một lượt bạn chỉ trả một lần phí tiện ích, giá khám bệnh sẽ thay đổi tùy theo chuyên khoa và số lượng chuyên khoa được đặt.
    Với mỗi chuyên khoa, bạn sẽ nhận được một phiếu khám bệnh tương ứng. Khi bạn hủy một trong các phiếu khám bệnh này, thì các phiếu khám bệnh còn lại (trong cùng lượt đăng ký đó) cũng sẽ bị hủy, tổng tiền khám sẽ được hoàn lại theo quy định hoàn tiền.
   </Text>
   </ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        flex: 0.85
      },
      text_Header: {
          fontSize: 18,
          fontWeight: 'bold',
          paddingTop: 20,
          paddingBottom: 20,
      },
      text_Active: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold'
      },
      text_Active_Italic: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
        lineHeight: 20
      },
      text_Regular: {
        fontSize: 14,
        lineHeight: 20
      }
})