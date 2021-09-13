// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: entity/entity.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Entity struct {
	Creator               string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id                    uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Name                  string `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Founders              string `protobuf:"bytes,4,opt,name=founders,proto3" json:"founders,omitempty"`
	EntityGroup           string `protobuf:"bytes,5,opt,name=entityGroup,proto3" json:"entityGroup,omitempty"`
	EntityType            string `protobuf:"bytes,6,opt,name=entityType,proto3" json:"entityType,omitempty"`
	Geo                   string `protobuf:"bytes,7,opt,name=geo,proto3" json:"geo,omitempty"`
	Urls                  string `protobuf:"bytes,8,opt,name=urls,proto3" json:"urls,omitempty"`
	InitiateDate          string `protobuf:"bytes,9,opt,name=initiateDate,proto3" json:"initiateDate,omitempty"`
	InitiateDatePrecision string `protobuf:"bytes,10,opt,name=initiateDatePrecision,proto3" json:"initiateDatePrecision,omitempty"`
	Jurisdictions         string `protobuf:"bytes,11,opt,name=jurisdictions,proto3" json:"jurisdictions,omitempty"`
	Industries            string `protobuf:"bytes,12,opt,name=industries,proto3" json:"industries,omitempty"`
	TokenType             string `protobuf:"bytes,13,opt,name=tokenType,proto3" json:"tokenType,omitempty"`
}

func (m *Entity) Reset()         { *m = Entity{} }
func (m *Entity) String() string { return proto.CompactTextString(m) }
func (*Entity) ProtoMessage()    {}
func (*Entity) Descriptor() ([]byte, []int) {
	return fileDescriptor_9b38ccb06a827056, []int{0}
}
func (m *Entity) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Entity) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Entity.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Entity) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Entity.Merge(m, src)
}
func (m *Entity) XXX_Size() int {
	return m.Size()
}
func (m *Entity) XXX_DiscardUnknown() {
	xxx_messageInfo_Entity.DiscardUnknown(m)
}

var xxx_messageInfo_Entity proto.InternalMessageInfo

func (m *Entity) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Entity) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Entity) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Entity) GetFounders() string {
	if m != nil {
		return m.Founders
	}
	return ""
}

func (m *Entity) GetEntityGroup() string {
	if m != nil {
		return m.EntityGroup
	}
	return ""
}

func (m *Entity) GetEntityType() string {
	if m != nil {
		return m.EntityType
	}
	return ""
}

func (m *Entity) GetGeo() string {
	if m != nil {
		return m.Geo
	}
	return ""
}

func (m *Entity) GetUrls() string {
	if m != nil {
		return m.Urls
	}
	return ""
}

func (m *Entity) GetInitiateDate() string {
	if m != nil {
		return m.InitiateDate
	}
	return ""
}

func (m *Entity) GetInitiateDatePrecision() string {
	if m != nil {
		return m.InitiateDatePrecision
	}
	return ""
}

func (m *Entity) GetJurisdictions() string {
	if m != nil {
		return m.Jurisdictions
	}
	return ""
}

func (m *Entity) GetIndustries() string {
	if m != nil {
		return m.Industries
	}
	return ""
}

func (m *Entity) GetTokenType() string {
	if m != nil {
		return m.TokenType
	}
	return ""
}

func init() {
	proto.RegisterType((*Entity)(nil), "dreamrs.entity.entity.Entity")
}

func init() { proto.RegisterFile("entity/entity.proto", fileDescriptor_9b38ccb06a827056) }

var fileDescriptor_9b38ccb06a827056 = []byte{
	// 336 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x91, 0x3f, 0x4f, 0x32, 0x41,
	0x10, 0xc6, 0x39, 0xe0, 0xe5, 0xcf, 0x00, 0x6f, 0xcc, 0x2a, 0xc9, 0x86, 0x98, 0x0b, 0x21, 0x16,
	0x54, 0x5c, 0xa1, 0x9f, 0x80, 0x68, 0x6c, 0x0d, 0xb1, 0xb2, 0x3b, 0xee, 0xc6, 0x73, 0x54, 0x76,
	0x2f, 0xbb, 0x7b, 0x89, 0x7c, 0x03, 0x4b, 0x3f, 0x96, 0x25, 0xa5, 0xa5, 0x81, 0x2f, 0x62, 0x6e,
	0x16, 0x04, 0x12, 0xab, 0x79, 0x9e, 0xdf, 0xf3, 0x14, 0x33, 0x19, 0x38, 0x45, 0xe5, 0xc8, 0x2d,
	0x23, 0x3f, 0x26, 0xb9, 0xd1, 0x4e, 0x8b, 0x7e, 0x6a, 0x30, 0x5e, 0x18, 0x3b, 0xd9, 0x52, 0x3f,
	0x06, 0x67, 0x99, 0xce, 0x34, 0x37, 0xa2, 0x52, 0xf9, 0xf2, 0xe8, 0xbd, 0x06, 0x8d, 0x1b, 0x2e,
	0x08, 0x09, 0xcd, 0xc4, 0x60, 0xec, 0xb4, 0x91, 0xc1, 0x30, 0x18, 0xb7, 0x67, 0x3b, 0x2b, 0xfe,
	0x43, 0x95, 0x52, 0x59, 0x1d, 0x06, 0xe3, 0xfa, 0xac, 0x4a, 0xa9, 0x10, 0x50, 0x57, 0xf1, 0x02,
	0x65, 0x8d, 0x6b, 0xac, 0xc5, 0x00, 0x5a, 0x8f, 0xba, 0x50, 0x29, 0x1a, 0x2b, 0xeb, 0xcc, 0x7f,
	0xbd, 0x18, 0x42, 0xc7, 0x2f, 0x71, 0x6b, 0x74, 0x91, 0xcb, 0x7f, 0x1c, 0x1f, 0x22, 0x11, 0x02,
	0x78, 0x7b, 0xbf, 0xcc, 0x51, 0x36, 0xb8, 0x70, 0x40, 0xc4, 0x09, 0xd4, 0x32, 0xd4, 0xb2, 0xc9,
	0x41, 0x29, 0xcb, 0x1d, 0x0a, 0xf3, 0x6a, 0x65, 0xcb, 0xef, 0x50, 0x6a, 0x31, 0x82, 0x2e, 0x29,
	0x72, 0x14, 0x3b, 0xbc, 0x8e, 0x1d, 0xca, 0x36, 0x67, 0x47, 0x4c, 0x5c, 0x41, 0xff, 0xd0, 0xdf,
	0x19, 0x4c, 0xc8, 0x92, 0x56, 0x12, 0xb8, 0xfc, 0x77, 0x28, 0x2e, 0xa0, 0xf7, 0x5c, 0x18, 0xb2,
	0x29, 0x25, 0x8e, 0xb4, 0xb2, 0xb2, 0xc3, 0xed, 0x63, 0x58, 0x5e, 0x41, 0x2a, 0x2d, 0xac, 0x33,
	0x84, 0x56, 0x76, 0xfd, 0x15, 0x7b, 0x22, 0xce, 0xa1, 0xed, 0xf4, 0x0b, 0x2a, 0x3e, 0xb2, 0xc7,
	0xf1, 0x1e, 0x4c, 0xa7, 0x9f, 0xeb, 0x30, 0x58, 0xad, 0xc3, 0xe0, 0x7b, 0x1d, 0x06, 0x1f, 0x9b,
	0xb0, 0xb2, 0xda, 0x84, 0x95, 0xaf, 0x4d, 0x58, 0x79, 0x18, 0x67, 0xe4, 0x9e, 0x8a, 0xf9, 0x24,
	0xd1, 0x8b, 0x68, 0xfb, 0xdc, 0xed, 0xcb, 0xa3, 0xb7, 0x9d, 0x70, 0xcb, 0x1c, 0xed, 0xbc, 0xc1,
	0x5f, 0xbd, 0xfc, 0x09, 0x00, 0x00, 0xff, 0xff, 0x6b, 0x08, 0x26, 0xb5, 0x19, 0x02, 0x00, 0x00,
}

func (m *Entity) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Entity) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Entity) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.TokenType) > 0 {
		i -= len(m.TokenType)
		copy(dAtA[i:], m.TokenType)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.TokenType)))
		i--
		dAtA[i] = 0x6a
	}
	if len(m.Industries) > 0 {
		i -= len(m.Industries)
		copy(dAtA[i:], m.Industries)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.Industries)))
		i--
		dAtA[i] = 0x62
	}
	if len(m.Jurisdictions) > 0 {
		i -= len(m.Jurisdictions)
		copy(dAtA[i:], m.Jurisdictions)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.Jurisdictions)))
		i--
		dAtA[i] = 0x5a
	}
	if len(m.InitiateDatePrecision) > 0 {
		i -= len(m.InitiateDatePrecision)
		copy(dAtA[i:], m.InitiateDatePrecision)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.InitiateDatePrecision)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.InitiateDate) > 0 {
		i -= len(m.InitiateDate)
		copy(dAtA[i:], m.InitiateDate)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.InitiateDate)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.Urls) > 0 {
		i -= len(m.Urls)
		copy(dAtA[i:], m.Urls)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.Urls)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.Geo) > 0 {
		i -= len(m.Geo)
		copy(dAtA[i:], m.Geo)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.Geo)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.EntityType) > 0 {
		i -= len(m.EntityType)
		copy(dAtA[i:], m.EntityType)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.EntityType)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.EntityGroup) > 0 {
		i -= len(m.EntityGroup)
		copy(dAtA[i:], m.EntityGroup)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.EntityGroup)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Founders) > 0 {
		i -= len(m.Founders)
		copy(dAtA[i:], m.Founders)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.Founders)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintEntity(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintEntity(dAtA []byte, offset int, v uint64) int {
	offset -= sovEntity(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Entity) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovEntity(uint64(m.Id))
	}
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.Founders)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.EntityGroup)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.EntityType)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.Geo)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.Urls)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.InitiateDate)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.InitiateDatePrecision)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.Jurisdictions)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.Industries)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = len(m.TokenType)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	return n
}

func sovEntity(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozEntity(x uint64) (n int) {
	return sovEntity(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Entity) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEntity
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Entity: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Entity: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Founders", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Founders = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EntityGroup", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.EntityGroup = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EntityType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.EntityType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Geo", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Geo = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Urls", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Urls = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InitiateDate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InitiateDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InitiateDatePrecision", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InitiateDatePrecision = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Jurisdictions", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Jurisdictions = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Industries", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Industries = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 13:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TokenType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TokenType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEntity(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEntity
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipEntity(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowEntity
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthEntity
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupEntity
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthEntity
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthEntity        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowEntity          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupEntity = fmt.Errorf("proto: unexpected end of group")
)