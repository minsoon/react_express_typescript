import { ActionType } from 'typesafe-actions';

export type Items = [
    {
        brandId: number;
        brandName: string;
        buyerMileageRate: number;
        buyingLimit: {
            buyingUnitQuantity: number;
            days: number;
            minimumQuantity: number;
            quantity: number;
            type: string;
        };
        detailCategoryCode: string | undefined;
        epinCode: number;
        imageUrl: string;
        itemName: string;
        itemNo: string;
        itemRegistrationDate: string;
        largeCategoryCode: string;
        legacy: {
            shopKindCode1: string;
            shopKindCode2: string;
            shopKindCode3: string;
        };
        mediumCategoryCode: string;
        presaleShippingDate: string | undefined;
        sellPrice: number;
        sellStatus: string;
        sellerId: string;
        shippingPolicyId: number;
        shippingTypeCode: string;
        shippingWeight: number;
        shop: {
            isUse: boolean;
            shopGroupCode: number;
            shopLargeCategoryCode: number;
            shopMediumCategoryCode: number;
            shopSmallCategoryCode: number;
        }[];
        smallCategoryCode: string;
        smileClubJoinBaseDate: string | undefined;
        stock: {
            checkUrl: string | undefined;
            quantity: number;
            sellerItemNo: string | undefined;
            skuMatchingVersionNo: number;
            stockId: number;
            type: string;
        };
        tradeWay: string;
        transPolicyNo: number;
        type: {
            isAdult: boolean;
            isAllKill: boolean | undefined;
            isBackwoodsDelivery: boolean;
            isBusinessMan: boolean;
            isC2c: boolean;
            isCartLimited: boolean;
            isCashReceiptLimit: boolean;
            isECoupon: boolean;
            isEbayShopping: boolean;
            isExceptGlobal: boolean;
            isExshop: boolean;
            isFasterDelivery: boolean;
            isFoodDelivery: boolean;
            isGift: boolean;
            isHappyCardVoucher: boolean;
            isIncomeDuty: boolean;
            isInternationalShipping: boolean;
            isMoneyCategory: boolean;
            isMount: boolean;
            isOptionUse: boolean;
            isPatrol: boolean;
            isPaymentMoneyCategory: boolean;
            isRental: boolean;
            isReservation: boolean;
            isSFCMall: boolean;
            isSmileBox: boolean;
            isSmileClubBizDeal: boolean;
            isSmileClubDeal: boolean;
            isSmileDelivery: boolean;
            isSmileFresh: boolean;
            isSmilePayDeal: boolean;
            isUsedItem: boolean;
            isVero: boolean;
            isYoungVoucher: boolean;
            isZeroPrice: boolean;
        }
    }
]

export type ItemState = Items[];

