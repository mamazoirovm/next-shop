export interface ICategory {
    id: number;
    name: string;
    images: string
}

export  interface IProudct{
title: string;
id: number;
price: number;
description: string;
category: ICategory;
images: string[]

}