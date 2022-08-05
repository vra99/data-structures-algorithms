#include <stdio.h>
#include <stdlib.h>

// define linked list
struct node
{
    int data;
    struct node *next;
};

struct node *head = NULL;

struct node *create_node(int data)
{
    struct node *new_node = (struct node *)malloc(sizeof(struct node));
    new_node->data = data;
    new_node->next = NULL;
    return new_node;
}

// insert at the beginning of the list
void insert_at_beginning(int data)
{
    struct node *new_node = create_node(data);
    new_node->next = head;
    head = new_node;
}

int insert_at_end(int data)
{
    struct node *new_node = create_node(data);
    struct node *temp = head;
    while (temp->next != NULL)
    {
        temp = temp->next;
    }
    temp->next = new_node;
    return 0;
}

// find a node that matches the data and print current and next node
struct node *find_node(int data)
{
    struct node *temp = head;
    while (temp != NULL)
    {
        if (temp->data == data)
        {
            printf("Current node: %d\n", temp->data);
            printf("Next node: %d\n", temp->next->data);
            return temp;
        }
        temp = temp->next;
    }
    return NULL;
}

int reverse_string(char *str)
{
    int i = 0;
    int j = 0;
    int len = 0;
    while (str[len] != '\0')
    {
        len++;
    }
    while (i < len / 2)
    {
        char temp = str[i];
        str[i] = str[len - i - 1];
        str[len - i - 1] = temp;
        i++;
    }
    return 0;
}

int main()
{
    insert_at_beginning(1);
    insert_at_beginning(2);
    insert_at_beginning(3);
    insert_at_end(4);
    insert_at_end(5);
    insert_at_end(9);
    struct node *temp = find_node(5);
    if (temp != NULL)
    {
        printf("%d\n", temp->data);
    }
    else
    {
        printf("Not found\n");
    }
    char str[] = "Hello World";
    reverse_string(str);
    printf("%s\n", str);
}
