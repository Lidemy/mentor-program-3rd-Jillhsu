#!/bin/bash
#Program:
#      Challenge for creating files with given number in script.
#History:
#2019/04/21 Sweetlark release
read -p "Please enter the number of files you want to create : " num


for ((i = 1; i <= ${num}; i++))
do
    touch "$i.js"
done

echo "檔案建立完成"
