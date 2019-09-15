use EMS;

create table Department
(
	Id int not null primary key identity(1,1),
	[Name] nvarchar(100) not null
);

--insert into Department values ('Production');
--insert into Department values ('Accounts');

select * from Department;

create table Employee 
(
	Id int not null primary key identity(1,1),
	FirstName nvarchar(100) not null,
	LastName nvarchar(100) not null,
	JoinedDateTime datetime not null,
	IsPermenent bit not null,
	IsFullTime bit default 1 not null,
	Salary decimal(18,2) not null,
	IsActive bit default 1 not null,

	ManagerId int null,
	DepartmentId int not null,

	constraint FK_Employee_Employee foreign key (ManagerId) references [Employee] (Id),
	constraint FK_Employee_Department foreign key (DepartmentId) references [Department] (Id) 

);

create table Position
(
	Id int not null primary key identity(1,1),
	JobTitle nvarchar(100),
	[Description] nvarchar(max)
);


--insert into Position values ('Owner', 'Top most position - ownership');
--insert into Position values ('Manager', 'Manager - Reports Owner');
--insert into Position values ('Production Engineer', 'Reports Manager');

select * from Position;

alter table Employee add PositionId int not null;
alter table Employee add constraint FK_Employee_Position foreign key (PositionId) references [Position] (Id);



--insert into Employee values ('John', 'Swayer', GETDATE(), 1, 1, 10000, 1, null, 1, 1);
--insert into Employee values ('James', 'Hunt', DATEADD(DAY, 1, GETDATE()), 1, 1, 10000, 1, 1, 1, 2);
--insert into Employee values ('Sam', 'Smith', DATEADD(DAY, 2, GETDATE()), 1, 1, 8000, 1, 2, 1, 3);
--insert into Employee values ('John', 'Desilva', DATEADD(DAY, 2, GETDATE()), 1, 0, 7000, 1, 2, 1, 3);

select * from Employee;
update Employee set IsPermenent = 0 where Id = 2;